/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    if (sticks.length < 2) return 0;
    let res = 0;
    let combined = [];
    sticks = sticks.sort((a, b) => a - b);
    while (sticks.length || combined.length > 1) {
        let curr = 0;
        for (let i = 0; i < 2; i++) {
            let condition = sticks.length && (!combined.length || sticks[0] < combined[0] );
            curr += condition ? sticks.shift() : combined.shift();
        }
        combined.push(curr);
        res += curr;
    }
    return res;
};