/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = 0, end = 0;
    const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    const ends = intervals.map(a => a[1]).sort((a, b) => a - b);
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[end]) {
            rooms ++;
        } else {
            end ++;
        }
    }
    return rooms;
};