import { assertEquals } from "https://deno.land/std@0.174.0/testing/asserts.ts";
import { trim, ltrim, rtrim } from "./trim.ts";

Deno.test("rtrim with empty string", () => {
    assertEquals(rtrim(''), '');
});

Deno.test("rtrim with whitespaces", () => {
    assertEquals(rtrim('hello \t\r\n'), 'hello');
});

Deno.test("rtrim with custom chars", () => {
    assertEquals(rtrim('hello,.', '.,'), 'hello');
});

Deno.test("ltrim with empty string", () => {
    assertEquals(ltrim(''), '');
});

Deno.test("ltrim with whitespaces", () => {
    assertEquals(ltrim('  hello'), 'hello');
});

Deno.test("ltrim with custom chars", () => {
    assertEquals(ltrim('~hello', '~'), 'hello');
});

Deno.test("trim with empty string", () => {
    assertEquals(trim(''), '');
});

Deno.test("trim with whitespaces", () => {
    assertEquals(trim('  hello  '), 'hello');
});

Deno.test("trim with custom chars", () => {
    assertEquals(trim('~hello~', '~'), 'hello');
});