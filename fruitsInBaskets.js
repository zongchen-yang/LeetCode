/** 904
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
  let left = 0, right = 0;
  let max = 0;
  const map = new Map();
  while (right < fruits.length) {
      let curRight = fruits[right];
      let curLeft = fruits[left];
      map.set(curRight, map.get(curRight) + 1 || 1);
      while (map.size > 2) {
          if (map.get(curLeft) === 1) {
              map.delete(curLeft);
          } else {
              map.set(curLeft, map.get(curLeft) - 1);
          }
          left ++;
      }
      max = Math.max(max, right - left + 1);
      right ++;
  }
  return max;
};