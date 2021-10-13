/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const prereqs = {};
    for (let i = 0; i < numCourses; i++) {
        prereqs[i] = 0;
    }
    for (const [curr, prereq] of prerequisites) {
        prereqs[curr]++;
    }
    
    const queue = [];
    for (const each in prereqs) {
        if (prereqs[each] === 0) queue.push(each);
    }
    
    const res = [];
    while (queue.length) {
        let course = Number(queue.shift());
        res.push(course);
        numCourses--;
        for (const [curr, prereq] of prerequisites) {
            if (prereq === course) {
                prereqs[curr]--;
                if (prereqs[curr] === 0) queue.push(curr);
            }
        }
    }
    return numCourses === 0 ? res : [];
};