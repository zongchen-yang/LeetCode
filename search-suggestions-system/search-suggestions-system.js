/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let trie = {};
    let res = [];
    for (let product of products) {
        let curr = trie;
        for (let l of product) {
            if (!curr[l]) {
                curr[l] = {sugg: []};
            }
            if (curr[l].sugg.length < 3) {
                curr[l].sugg.push(product);
            }
            curr = curr[l];
        }
    }
    let curr = trie;
    for (let l of searchWord) {
        if (curr) curr = curr[l];
        res.push(!curr ? [] : curr.sugg);
    }
    return res;
};