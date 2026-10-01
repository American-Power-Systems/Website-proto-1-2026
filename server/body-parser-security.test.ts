import assert from "node:assert/strict";
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { test } from "node:test";
import express, { type ErrorRequestHandler } from "express";

const parsers = [
  { name: "json", make: (limit: string | number | undefined | null) => express.json({ limit: limit as string | number }), contentType: "application/json", body: (size: number) => JSON.stringify({ value: "a".repeat(size) }) },
  { name: "form", make: (limit: string | number | undefined | null) => express.urlencoded({ extended: false, limit: limit as string | number }), contentType: "application/x-www-form-urlencoded", body: (size: number) => `value=${"a".repeat(size)}` },
];

for (const parser of parsers) {
  test(`${parser.name} rejects invalid limits at construction`, () => {
    for (const limit of ["not-a-size", "", NaN]) {
      assert.throws(() => parser.make(limit));
    }
    for (const limit of [undefined, null, "100kb", 1024]) {
      assert.doesNotThrow(() => parser.make(limit));
    }
  });

  test(`${parser.name} enforces configured and default limits over HTTP`, async () => {
    const app = express();
    app.post("/configured", parser.make("1kb"), (_req, res) => res.json({ ok: true }));
    app.post("/default", parser.make(undefined), (_req, res) => res.json({ ok: true }));
    app.post("/null", parser.make(null), (_req, res) => res.json({ ok: true }));
    app.use(((error, _req, res, _next) => {
      res.status(error.status || 500).json({ type: error.type });
    }) satisfies ErrorRequestHandler);
    const server = app.listen(0, "127.0.0.1");
    await once(server, "listening");
    const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    try {
      for (const [path, size, status] of [
        ["/configured", 16, 200], ["/configured", 2048, 413],
        ["/default", 16, 200], ["/default", 101 * 1024, 413],
        ["/null", 101 * 1024, 413], ["/configured", 16, 200],
      ] as const) {
        const response = await fetch(`${origin}${path}`, {
          method: "POST", headers: { "Content-Type": parser.contentType }, body: parser.body(size),
        });
        assert.equal(response.status, status);
        const result = await response.json();
        if (status === 413) assert.equal(result.type, "entity.too.large");
      }
    } finally {
      await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    }
  });
}
