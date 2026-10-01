import assert from "node:assert/strict";
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { test } from "node:test";
import express from "express";
import qs from "qs";

test("qs handles previously unsafe serialization inputs", () => {
  for (const options of [{ plainObjects: true }, { allowPrototypes: true }]) {
    const parsed = qs.parse("x[constructor][isBuffer]=y", options);
    assert.doesNotThrow(() => qs.stringify(parsed));
  }
  for (const value of [null, undefined]) {
    assert.doesNotThrow(() => qs.stringify({ a: [value, "b"] }, {
      arrayFormat: "comma", encodeValuesOnly: true,
    }));
  }
});

test("qs enforces comma-array limits with plain and bracket keys", () => {
  for (const key of ["a", "a[]"]) {
    assert.throws(() => qs.parse(`${key}=1,2,3,4,5,6`, {
      comma: true, arrayLimit: 5, throwOnLimitExceeded: true,
    }), RangeError);
  }
  assert.deepEqual(qs.parse("a=1,2", { comma: true, arrayLimit: 5 }), { a: ["1", "2"] });
});

test("Express and body-parser remain compatible with the qs override", async () => {
  const app = express();
  app.get("/query", (req, res) => res.json({ query: req.query, serialized: qs.stringify(req.query) }));
  app.post("/form", express.urlencoded({ extended: false }), (req, res) => res.json(req.body));
  app.post("/nested-form", express.urlencoded({ extended: true }), (req, res) => res.json(req.body));
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  try {
    const query = await fetch(`${origin}/query?filter[city]=Kent&tags[]=dc&tags[]=ac`);
    assert.equal(query.status, 200);
    assert.deepEqual((await query.json()).query, { filter: { city: "Kent" }, tags: ["dc", "ac"] });
    const adversarial = await fetch(`${origin}/query?x[constructor][isBuffer]=y`);
    assert.equal(adversarial.status, 200);
    assert.equal(typeof (await adversarial.json()).serialized, "string");
    for (const [path, body, expected] of [
      ["/form", "name=APS&tags=dc&tags=ac", { name: "APS", tags: ["dc", "ac"] }],
      ["/nested-form", "site[city]=Kent&tags[]=dc&tags[]=ac", { site: { city: "Kent" }, tags: ["dc", "ac"] }],
    ] as const) {
      const response = await fetch(`${origin}${path}`, {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body,
      });
      assert.equal(response.status, 200);
      assert.deepEqual(await response.json(), expected);
    }
  } finally {
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
