/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqs = new Array(numCourses).fill(0);
    const hash = new Map();
    for (let [curr, prereq] of prerequisites) {
        prereqs[curr] ++;
        if (!hash.has(prereq)) {
            hash.set(prereq, [curr]);
        } else {
            hash.get(prereq).push(curr);
        }
    }
    const queue = [];
    for (let i = 0; i < prereqs.length; i++) {
        if (prereqs[i] === 0) queue.push(i);
    }
    const finishes = [];
    while (queue.length) {
        let finished = queue.shift();
        if (hash.has(finished)) {
            for (let curr of hash.get(finished)) {
                prereqs[curr]--;
                if (prereqs[curr] === 0) {
                    queue.push(curr);
                }
            }
        }
        finishes.push(finished);
    }
    return finishes.length === numCourses;
};