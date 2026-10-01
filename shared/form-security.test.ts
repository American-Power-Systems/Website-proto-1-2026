import assert from "node:assert/strict";
import { test } from "node:test";
import { createFormControl } from "react-hook-form";

for (const operation of ["clearErrors", "unregister"] as const) {
  test(`${operation} cannot delete prototype properties through field paths`, () => {
    const marker = "apsFormPrototypeSentinel";
    const before = Object.getOwnPropertyDescriptors(Object.prototype);
    Object.defineProperty(Object.prototype, marker, {
      value: "preserved", configurable: true,
    });
    try {
      const form = createFormControl();
      for (const path of [
        `__proto__.${marker}`,
        `constructor.prototype.${marker}`,
        `nested.__proto__.${marker}`,
        `nested[constructor][prototype][${marker}]`,
      ]) {
        form.register("nested.safe");
        form[operation](path);
        assert.equal(Object.getOwnPropertyDescriptor(Object.prototype, marker)?.value, "preserved", path);
      }
    } finally {
      Reflect.deleteProperty(Object.prototype, marker);
    }
    assert.deepEqual(Object.getOwnPropertyDescriptors(Object.prototype), before);
  });
}

test("normal nested fields support errors, submission, and unregister", async () => {
  const form = createFormControl({ defaultValues: { contact: { name: "APS", email: "demo@example.com" } } });
  form.register("contact.name");
  form.register("contact.email");
  form.setError("contact.name", { type: "manual", message: "Required" });
  assert.equal(form.getFieldState("contact.name").error?.message, "Required");
  form.clearErrors("contact.name");
  assert.equal(form.getFieldState("contact.name").error, undefined);
  let submitted: unknown;
  await form.handleSubmit((values) => { submitted = values; })();
  assert.deepEqual(submitted, { contact: { name: "APS", email: "demo@example.com" } });
  form.unregister("contact.name");
  await form.handleSubmit((values) => { submitted = values; })();
  assert.deepEqual(submitted, { contact: { email: "demo@example.com" } });
});
