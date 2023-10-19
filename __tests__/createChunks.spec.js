const createChunks = require("../src/createChunks");

describe("Create chunks function", () => {
    it("it should create an empty list for given (length) zero", () => {
        const input = "Hello";

        const output = [];

        expect(createChunks(input, 0)).toEqual(output);
    });
});