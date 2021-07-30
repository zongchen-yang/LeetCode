/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let res = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
      for (let j = num2.length - 1; j >= 0; j--) {
          let prod = res[j + i + 1] + Number(num1[i]) * Number(num2[j]);
          res[j + i + 1] = prod % 10;
          res[j + i] += Math.floor(prod / 10);
      }
  }
  while (res[0] === 0) {
      res.shift();
  }
  return res.join('');
};