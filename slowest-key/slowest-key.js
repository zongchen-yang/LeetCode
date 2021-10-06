/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let time = releaseTimes[0];
    let key = keysPressed[0];
    for (let i = 1; i < keysPressed.length; i++) {
        let currTime = releaseTimes[i] - releaseTimes[i-1];
        if (currTime > time || (currTime === time && keysPressed[i] > key)) {
            time = currTime;
            key = keysPressed[i];
        }
    }
    return key;
};