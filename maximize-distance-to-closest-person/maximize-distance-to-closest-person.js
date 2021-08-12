/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    seats = seats.join('').split('1');
    return Math.max(seats.pop().length, seats.shift().length, ...seats.map(spaces => spaces.length ? Math.floor((spaces.length + 1) / 2) : 0));
};