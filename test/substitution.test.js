// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("my substitution() tests", () => {
  describe("encoding", () => {
    it("correctly encodes every letter of the alphabet", () => {
      const message = "abcdefghijklmnopqrstuvwxyz";
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const actual = substitution(message, alphabet);
      const expected = "abcdefghijklmnopqrstuvwxyz";
      expect(actual).to.equal(expected);
    });

    it("correctly decodes every letter of the alphabet", () => {
      const message = "abcdefghijklmnopqrstuvwxyz";
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const actual = substitution(message, alphabet, false);
      const expected = "abcdefghijklmnopqrstuvwxyz";
      expect(actual).to.equal(expected);
    });

    it("returns no output if message contains characters not in alphabet key", () => {
      const message = "!@#$%^&*()_";
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const actual = substitution(message, alphabet);
      const expected = ""
      expect(actual).to.equal(expected);
    });
  });
});
