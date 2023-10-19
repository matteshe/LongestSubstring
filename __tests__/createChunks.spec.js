import { createChunks } from "../src/createChunks";

describe("Create chunks function", () => {
    test("it should create an empty list for chunk length (0)", () => {
        const input = "Hello";

        const output = [];

        expect(createChunks(input, 0)).toEqual(output);
    });

    test("it should create an array with (x) elements of given input length without duplicates and chunk length (1)", () => {
        const input = "abc";

        const output = ["a", "b", "c"];

        expect(createChunks(input, 1)).toEqual(output);
        expect(createChunks(input, 1).length).toEqual(input.length);
    });

    test("it should create an array with (x) elements of given input length minus duplicates and chunk length (1)", () => {
        const input = "hello";

        const output = ["h", "e", "l", "o"];

        expect(createChunks(input, 1)).toEqual(output);
        expect(createChunks(input, 1).length).toEqual(4);
    });
});