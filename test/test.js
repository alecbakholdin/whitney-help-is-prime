import { test, describe } from "mocha";
import { assert } from "chai";
import { isPrime } from "../index.js";

describe("isPrime", () => {
  [
    [0, false],
    [1, false],
    [2, true],
    [5, true],
    [8, false],
    [91, false],
    [144, false],
    [101, true],
  ].forEach(([a, b]) =>
    test(`${a}\tis${b ? " " : " not "}prime`, () =>
      assert(b === isPrime(a)))
  );
});
