class Solution {
  solve(nums) {
      var odd = [];
      var even = [];
      var output = [];
      for (var i = 0; i < nums.length; i++) {
          if (nums[i] % 2 === 0) {
              even.push(nums[i]);
          } else {
              odd.push(nums[i]);
          }
      }
      odd.sort((a, b) => b - a);
      even.sort((a, b) => a - b);
      for (var i = 0; i < nums.length; i++) {
          if (nums[i] % 2 === 0) {
              output.push(even.shift());
          } else {
              output.push(odd.shift());
          }
      }
      return output;
  }
}

