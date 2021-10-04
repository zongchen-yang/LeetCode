/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        if (!truckSize) break;
        let count = Math.min(truckSize, boxTypes[i][0]);
        res += count * boxTypes[i][1];
        truckSize -= count;
    }
    return res;
};