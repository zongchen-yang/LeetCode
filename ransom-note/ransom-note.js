/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        if (!map[magazine[i]]) map[magazine[i]] = 0;
        map[magazine[i]] ++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) return false;
        else map[ransomNote[i]]--;
    }
    return true;
};