import assert from "node:assert/strict";
import { test } from "node:test";
import { sql } from "drizzle-orm";
import { PgDialect, QueryBuilder } from "drizzle-orm/pg-core";
import { MySqlDialect } from "drizzle-orm/mysql-core";
import { SQLiteSyncDialect } from "drizzle-orm/sqlite-core";
import { insertUserSchema, users } from "./schema";

for (const [name, dialect, quote] of [
  ["PostgreSQL", new PgDialect(), '"'],
  ["MySQL", new MySqlDialect(), "`"],
  ["SQLite", new SQLiteSyncDialect(), '"'],
] as const) {
  test(`${name} escapes embedded identifier delimiters`, () => {
    const identifier = `name${quote}; SELECT 1; --${quote}`;
    const escaped = quote + identifier.replaceAll(quote, quote + quote) + quote;
    assert.equal(dialect.escapeName(identifier), escaped);
    assert.equal(dialect.sqlToQuery(sql`select ${sql.identifier(identifier)}`).sql, `select ${escaped}`);
  });
}

test("PostgreSQL query aliases remain a single escaped identifier", () => {
  const query = new QueryBuilder().select({ value: sql`1`.as('value"; SELECT 1; --') }).from(users).toSQL();
  assert.equal(query.sql, 'select 1 as "value""; SELECT 1; --" from "users"');
  assert.deepEqual(query.params, []);
});

test("drizzle-zod preserves the existing user insertion schema", () => {
  const valid = { username: "example", password: "test-only-password" };
  assert.deepEqual(insertUserSchema.parse(valid), valid);
  assert.equal(insertUserSchema.safeParse({ username: "example" }).success, false);
  assert.equal(insertUserSchema.safeParse({ username: 123, password: "test-only" }).success, false);
});
