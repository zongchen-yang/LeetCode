/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currTank = 0, totalTank = 0, pos = 0;
    for (let i = 0; i < gas.length; i++) {
        currTank += gas[i] - cost[i];
        totalTank += gas[i] - cost[i];
        if (currTank < 0) {
            pos = i+1;
            currTank = 0;
        }
    }
    return totalTank >= 0 ? pos : -1;
};