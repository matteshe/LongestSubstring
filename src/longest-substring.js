import { createChunks } from "../src/createChunks";

export function findLongestSubstring(string1, string2) {
    let substrings = [];

    if (!string1 || !string2) {
        return substrings;
    }

    if (string1 === string2) {
        substrings.push(string1);
    } else {
        let max = string1.length >= string2.length ? string1.length : string2.length;
        let min = 0;
        let middle = Math.floor(max / 2);
        console.log("test: " + max);
        while (max !== middle && min !== middle) {
            let string1Chunks = createChunks(string1, middle);
            let string2Chunks = createChunks(string2, middle);
                  
            substrings = string1Chunks.filter(s => string2Chunks.includes(s));
            if (substrings.length) {
                // do we find longer ones?
                min = middle;
                middle = middle + Math.floor((max - middle) / 2);                
            } else {
                // check if substrings exists on with short chunk length
                max = middle;
                middle = middle - Math.floor((middle - min) / 2);
            }
        }
    }

    return substrings;
}
