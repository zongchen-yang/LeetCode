/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    const timesArr = timestamp.map((each, i) => [username[i], timestamp[i], website[i]]).sort((a, b) => a[1] - b[1]);
    const usersMap = {};
    timesArr.forEach((each) => {
        if (!usersMap[each[0]]) usersMap[each[0]] = [];
        usersMap[each[0]].push(each[2]);
    });
    const res = ['', 0];
    const websitesMap = {};
    Object.values(usersMap).forEach((each) => {
        const websiteMap = {};
        for (let i = 0; i < each.length - 2; i++) {
            for (let j = i + 1; j < each.length - 1; j++) {
                for (let k = j + 1; k < each.length; k++) {
                    let key = `${each[i]}|${each[j]}|${each[k]}`;
                    if (!websiteMap[key]) websiteMap[key] = 1;
                }
            }
        }
        for (const str in websiteMap) {
            if (!websitesMap[str]) websitesMap[str] = 0;
            websitesMap[str] ++;
        }
    });
    for (const key in websitesMap) {
        if (websitesMap[key] > res[1] || (websitesMap[key] === res[1] && key.split('|').join(' ') < res[0].split('|').join(' '))) {
            res[0] = key;
            res[1] = websitesMap[key];
        }
    }
    return res[0].split('|');
};