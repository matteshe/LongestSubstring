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
    });

    test("it should return an array with (1) element if both input are identical", () => {
        const input = "abc";

        const output = [ "abc" ];

        expect(findLongestSubstring(input, input)).toEqual(output);
    });

    test("it should return an empty array if both input contain no substrings", () => {
        const string1 = "abc";
        const string2 = "def";

        const output = [];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    });

    test("it should return an array with x elements of the longest substrings", () => {
        const string1 = "An ape eat banana";
        const string2 = "I eat food";

        const output = [ " eat " ];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    });

    test("it should return (1) longest substring (CHECKIT)", () => {
        const string1 = "CHECKITWHEREISTHELONGESTSUBSTRING24";
        const string2 = "SUBSTINGWHERECHECKITANTCHECK24ISCHECKWHERE";

        const output = [ "CHECKIT" ];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    });

    test("it should return (2) longest substrings", () => {
        const string1 = "247WECODEONLINEONENTWICKLERHELDDECHECKITOUT";
        const string2 = "CHECKITOUTWECODEONLINEON24ENTWICKLERHELDOUT";

        const output = [ "WECODEONLINEON", "ENTWICKLERHELD" ];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    });

    test("it should return (1) longest substring (ALSOLOVE)", () => {
        const string1 = "DONUTSAREDELICIOUSBUTIALSOLOVECHECK24PIZZA";
        const string2 = "PIZZASAREYUMMYBUTIDOALSOLOVEDONUTSFROMCHECK24";

        const output = [ "ALSOLOVE" ];

        expect(findLongestSubstring(string1, string2)).toEqual(output);
    });
});
