/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singles = 0;
    let doubles = 0;

    for (num of nums) {
        // Add to singles if it's not in doubles. Also remove from singles if it's in there
        singles = (~doubles) & (singles ^ num);
        // Add to doubles if it's not in singles. Also remove from doubles if it's in there
        doubles = (~singles) & (doubles ^ num);
    }

    return singles;
};