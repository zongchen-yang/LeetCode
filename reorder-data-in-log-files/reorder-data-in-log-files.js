/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let digitLogs = [], letterLogs = [];
    for (const log of logs) {
        const logArr = log.split(' ');
        if (isNaN(logArr[1])) {
            letterLogs.push([logArr[0], logArr.slice(1).join(' ')])
        } else {
            digitLogs.push(log);
        }
    }
    letterLogs.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return a[1].localeCompare(b[1]);
    })
    return letterLogs.map((each) => each.join(' ')).concat(digitLogs)
};