import { findLongestSubstring } from "../src/longest-substring";

describe("find longest substrings function", () => {
    test("it should return an empty array if left input is empty", () => {
        const string1 = "";
        const string2 = "abc";

        const output = [];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    });

    test("it should return an empty array if left input is empty", () => {
        const string1 = "";
        const string2 = "abc";

        const output = [];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    })

    test("it should return an array with (1) element if both input are identical", () => {
        const input = "abc";

        const output = [ "abc" ];

        expect(findLongestSubstring(input, input)).toEqual(output);
    })
});
