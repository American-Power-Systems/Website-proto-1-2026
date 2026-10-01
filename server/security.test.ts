import assert from "node:assert/strict";
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { test } from "node:test";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";
import { securityOptions } from "./security";

for (const production of [true, false]) {
  test(`security headers in ${production ? "production" : "development"}`, async () => {
    const app = express();
    app.use(helmet(securityOptions(production)));
    app.use("/assets", express.static("client/public"));
    app.get("/api/example", (_req, res) => res.json({ ok: true }));
    app.get("/error", () => { throw new Error("test error"); });
    app.use(((_err, _req, res, _next) => {
      res.status(500).json({ message: "test error" });
    }) satisfies ErrorRequestHandler);
    const server = app.listen(0, "127.0.0.1");
    await once(server, "listening");
    const port = (server.address() as AddressInfo).port;
    try {
      for (const [path, status] of [["/api/example", 200], ["/assets/favicon.png", 200], ["/missing", 404], ["/error", 500]] as const) {
        const response = await fetch(`http://127.0.0.1:${port}${path}`);
        await response.arrayBuffer();
        assert.equal(response.status, status);
        assert.equal(response.headers.get("x-content-type-options"), "nosniff");
        assert.equal(response.headers.get("referrer-policy"), "no-referrer");
        assert.equal(response.headers.has("x-powered-by"), false);
        if (production) {
          assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN");
          assert.match(response.headers.get("strict-transport-security")!, /max-age=31536000/);
          const policy = response.headers.get("content-security-policy")!;
          if (status === 404) {
            // Express finalhandler replaces CSP on its built-in 404 page.
            assert.equal(policy, "default-src 'none'");
            continue;
          }
          assert.match(policy, /frame-ancestors 'self'/);
          assert.match(policy, /object-src 'none'/);
          assert.match(policy, /script-src-attr 'none'/);
          assert.match(policy, /upgrade-insecure-requests/);
          const scriptPolicy = policy.split(";").find(rule => rule.startsWith("script-src "))!;
          assert.ok(scriptPolicy.includes("https://platform.linkedin.com"));
          assert.ok(!scriptPolicy.includes("'unsafe-inline'"));
          assert.ok(!scriptPolicy.includes("'unsafe-eval'"));
          for (const origin of ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://www.google.com", "https://maps.google.com"]) {
            assert.ok(policy.includes(origin), `${origin} must remain permitted`);
          }
        } else {
          // Keep HTTP localhost, Vite HMR, and embedded Replit previews usable.
          for (const header of ["content-security-policy", "strict-transport-security", "x-frame-options", "cross-origin-opener-policy"]) {
            if (status === 404 && header === "content-security-policy") {
              assert.equal(response.headers.get(header), "default-src 'none'");
            } else {
              assert.equal(response.headers.has(header), false);
            }
          }
        }
      }
    } finally {
      await new Promise<void>((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
    }
  });
}
