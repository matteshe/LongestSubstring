import { createChunks } from "../src/createChunks";

describe("Create chunks function", () => {
    it("it should create an empty list for zero length chunks", () => {
        const input = "Hello";

        const output = [];

        expect(createChunks(input, 0)).toEqual(output);
    });
});