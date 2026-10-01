import assert from "node:assert/strict";
import { test } from "node:test";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fromError } from "zod-validation-error";
import { insertUserSchema } from "./schema";

test("catchall parsing does not replace the output object's prototype", () => {
  const schema = z.object({ name: z.string() }).catchall(z.unknown());
  const input = JSON.parse('{"name":"APS","__proto__":{"isAdmin":true},"note":"retained"}');
  const result = schema.parse(input);
  assert.equal(Object.getPrototypeOf(result), Object.prototype);
  assert.equal(Object.hasOwn(result, "__proto__"), false);
  assert.equal(result.isAdmin, undefined);
  assert.equal(result.note, "retained");
  assert.equal(Object.hasOwn(Object.prototype, "isAdmin"), false);
});

test("base64 validation rejects whitespace instead of normalizing it", () => {
  const schema = z.base64();
  assert.equal(schema.safeParse("SGVsbG8=").success, true);
  for (const value of ["SG Vs bG8=", "SGVsbG8=\n", "\tSGVsbG8=", "SGVs\rbG8="]) {
    assert.equal(schema.safeParse(value).success, false);
  }
});

test("form resolver accepts valid Zod 4 data and returns field errors", async () => {
  const resolve = zodResolver(insertUserSchema);
  const options = { fields: {}, shouldUseNativeValidation: false };
  const valid = { username: "example", password: "test-only-password" };
  const accepted = await resolve(valid, undefined, options);
  assert.deepEqual(accepted.values, valid);
  assert.deepEqual(accepted.errors, {});
  const rejected = await resolve({ username: undefined, password: undefined }, undefined, options);
  assert.ok(rejected.errors.username);
  assert.ok(rejected.errors.password);
  assert.deepEqual(rejected.values, {});
});

test("validation error formatter supports Zod 4 errors", () => {
  const parsed = insertUserSchema.safeParse({ username: 123 });
  assert.equal(parsed.success, false);
  if (!parsed.success) {
    const error = fromError(parsed.error);
    assert.match(error.message, /username/);
    assert.match(error.message, /password/);
  }
});
