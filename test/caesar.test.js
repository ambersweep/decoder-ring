const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("my caesar() tests", () => {
  describe("input tests", () => {
    it("Should ignore numbers and symbols", () => {
      const message = "123456789!@#$%^&*()_";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "123456789!@#$%^&*()_"

      expect(actual).to.equal(expected);
    });
  });
});
