import { createChunks } from "../src/createChunks";

export function findLongestSubstring(string1, string2) {
    if (!string1 || !string2) {
        return "";
    }
    
    if (string1 === string2) {
        return string1;
    } else {
        let substrings = [];
        let max = string1.length >= string2.length ? string1.length : string2.length;
        let min = 0;
        let middle = (max / 2) >>0;
        console.log("test: " + max);
        while (max !== middle && min !== middle) {
            let string1Chunks = createChunks(string1, middle);
            let string2Chunks = createChunks(string2, middle);
                  
            const commonChunks = string1Chunks.filter(s => string2Chunks.includes(s));
            if (commonChunks.length) {
                // do we find longer ones?
                substrings = commonChunks;
                min = middle;
                const distance = ((max - middle) / 2) >> 0;
                middle = middle + distance;
            } else {
                // check if substrings exists on with short chunk length
                max = middle;
                const distance = ((middle - min) / 2) >> 0;
                middle = middle - distance;
            }
        }
        return substrings.join(" ");
    }
}
