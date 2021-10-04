/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    if (sticks.length <= 1) return 0;
    sticks.sort((a, b) => a - b);
    const combined = [];
    let res = 0;
    while (sticks.length || combined.length > 1) {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let condition = sticks.length && (!combined.length || sticks[0] < combined[0]);
            sum += condition ? sticks.shift() : combined.shift();
        }
        combined.push(sum);
        res += sum;
    }
    return res;
};