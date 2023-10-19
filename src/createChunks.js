export function createChunks(inputStr, length) {
    let chunks = [];

    if (length <=0) {
        return chunks;
    }
        
    for (let i = 0; i <= inputStr.length - length; i++) {
        chunks.push(inputStr.substring(i, i+length));
    }
    
    return chunks;
}
