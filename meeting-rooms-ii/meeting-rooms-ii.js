/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = 0, end = 0;
    let starts = intervals.concat().sort((a, b) => a[0] - b[0]);
    let ends = intervals.sort((a, b) => a[1] - b[1]);
    for (var i = 0; i < intervals.length; i++) {
		if (starts[i][0] < ends[end][1]) {
			rooms++;
		} else {
			end++;
		}
	}
	return rooms;
};