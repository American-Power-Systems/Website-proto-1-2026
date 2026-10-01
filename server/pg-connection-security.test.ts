import assert from "node:assert/strict";
import { test } from "node:test";
import { parse, toClientConfig, parseIntoClientConfig } from "pg-connection-string";
import { Client } from "pg";

const normal = "postgres://test-user:p%40ss@db.example.invalid:5433/aps?sslmode=verify-full&application_name=aps-test";
const hostile = `${normal}&__proto__=untrusted&constructor=untrusted&prototype=untrusted`;

for (const [name, convert] of [
  ["parse", (url: string) => parse(url)],
  ["parse then toClientConfig", (url: string) => toClientConfig(parse(url))],
  ["parseIntoClientConfig", (url: string) => parseIntoClientConfig(url)],
] as const) {
  test(`${name} keeps prototype-named query keys as data`, () => {
    const before = Object.getOwnPropertyDescriptors(Object.prototype);
    const config = convert(hostile);
    assert.equal(Object.getPrototypeOf(config), null);
    for (const key of ["__proto__", "constructor", "prototype"]) {
      assert.equal(Object.hasOwn(config, key), true);
      assert.equal((config as Record<string, unknown>)[key], "untrusted");
    }
    assert.equal(config.user, "test-user");
    assert.equal(config.password, "p@ss");
    assert.equal(config.host, "db.example.invalid");
    assert.equal(String(config.port), "5433");
    assert.equal(config.database, "aps");
    assert.equal(config.application_name, "aps-test");
    assert.equal(typeof config.ssl, "object");
    assert.notEqual((config.ssl as { rejectUnauthorized?: boolean }).rejectUnauthorized, false);
    assert.deepEqual(Object.getOwnPropertyDescriptors(Object.prototype), before);
  });
}

test("toClientConfig preserves null prototypes for object and SSL configuration", () => {
  const source = JSON.parse('{"host":"db.example.invalid","database":"aps","__proto__":{"pgPolluted":true},"ssl":{"rejectUnauthorized":true,"__proto__":{"sslPolluted":true}}}');
  const result = toClientConfig(source);
  assert.equal(Object.getPrototypeOf(result), null);
  assert.equal(Object.getPrototypeOf(result.ssl), null);
  assert.equal(Object.hasOwn(result, "__proto__"), true);
  assert.equal(Object.hasOwn(result.ssl!, "__proto__"), true);
  assert.equal((result as Record<string, unknown>).pgPolluted, undefined);
  assert.equal((result.ssl as Record<string, unknown>).sslPolluted, undefined);
  assert.equal(Object.hasOwn(Object.prototype, "pgPolluted"), false);
  assert.equal(Object.hasOwn(Object.prototype, "sslPolluted"), false);
});

test("pg Client consumes patched parser output without a database connection", () => {
  const client = new Client({ connectionString: normal });
  assert.equal(client.user, "test-user");
  assert.equal(client.host, "db.example.invalid");
  assert.equal(client.port, 5433);
  assert.equal(client.database, "aps");
  assert.equal(typeof client.ssl, "object");
  assert.notEqual((client.ssl as { rejectUnauthorized?: boolean }).rejectUnauthorized, false);
});
