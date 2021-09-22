/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    for (const word of words) {
        if (!map[word]) map[word] = 1;
        else map[word] ++;
    }
    let arr = Object.keys(map).sort((a, b) => {
        let diff = map[b] - map[a];
        return diff ? diff : a.localeCompare(b);
    }) 
    return arr.slice(0, k);
};