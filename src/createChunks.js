export function createChunks(inputStr, length) {
    let chunks = [];

    if (length <=0) {
        return chunks;
    }
        
    for (let i = 0; i <= inputStr.length - length; i++) {
        let chunk = inputStr.substring(i, i+length);
        if (! chunks.includes(chunk)) {
            chunks.push(chunk);
        }
        
    }
    
    return chunks;
}
