/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for (const num of nums) {
        if (!map[num]) map[num] = 1;
        else map[num]++;
    }
    const arr = [];
    for (const key in map) {
        if (!arr[map[key]]) arr[map[key]] = [];
        arr[map[key]].push(key);
    }
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) res.push(...arr[i]);
        if (res.length >= k) return res;
    }
};