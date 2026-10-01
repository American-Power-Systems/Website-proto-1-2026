import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { test } from "node:test";

// Exercise the exact decoder that consumes server RowDescription/DataRow messages.
const require = createRequire(import.meta.url);
const Result = require("pg/lib/result");
const fields = ["__proto__", "constructor", "prototype"].map(name => ({ name, dataTypeID: 114, format: "text" }));

for (const value of ['{"pgRowPolluted":true}', null]) {
  test(`prototype-named columns remain own properties with ${value === null ? "null" : "JSON"} values`, () => {
    const before = Object.getOwnPropertyDescriptors(Object.prototype);
    const result = new Result();
    result.addFields(fields);
    const row = result.parseRow(fields.map(() => value));
    assert.equal(Object.getPrototypeOf(row), Object.prototype);
    assert.equal(row.pgRowPolluted, undefined);
    for (const { name } of fields) {
      assert.equal(Object.hasOwn(row, name), true);
      assert.deepEqual(row[name], value === null ? null : { pgRowPolluted: true });
    }
    assert.deepEqual(Object.getOwnPropertyDescriptors(Object.prototype), before);
    assert.equal(Object.hasOwn(Object.prototype, "pgRowPolluted"), false);
  });
}

test("ordinary result rows preserve integer, text, null, and JSON serialization", () => {
  const result = new Result();
  result.addFields([
    { name: "id", dataTypeID: 23, format: "text" },
    { name: "username", dataTypeID: 25, format: "text" },
    { name: "note", dataTypeID: 25, format: "text" },
  ]);
  const row = result.parseRow(["42", "example", null]);
  assert.deepEqual(row, { id: 42, username: "example", note: null });
  assert.equal(JSON.stringify(row), '{"id":42,"username":"example","note":null}');
  result.addFields([{ name: "__proto__", dataTypeID: 114, format: "text" }]);
  const next = result.parseRow(['{"pgRowPolluted":true}']);
  assert.equal(Object.hasOwn(next, "__proto__"), true);
  assert.equal(Object.hasOwn(next, "username"), false);
  assert.equal(Object.getPrototypeOf(next), Object.prototype);
});

test("array row mode ignores prototype-related column names", () => {
  const result = new Result("array");
  result.addFields(fields);
  const row = result.parseRow(['{"pgRowPolluted":true}', null, '"ordinary"']);
  assert.deepEqual(row, [{ pgRowPolluted: true }, null, "ordinary"]);
  assert.equal(Object.getPrototypeOf(row), Array.prototype);
});
