export function findLongestSubstring(string1, string2) {
    const substrings = [];

    if (!string1 || !string2) {
        return substrings;
    }

    if (string1 === string2) {
        substrings.push(string1);
    }
    
    return substrings;
}
