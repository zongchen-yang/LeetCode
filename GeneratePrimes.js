class Solution {
  solve(n) {
      if (n < 2) {
          return [];
      }
      if (n < 3) {
          return [2];
      }
      var primes = [2, 3];
      var isPrime;
      for (var i = 5; i <= n; i += 2) {
          isPrime = true;
          for (var j = 0; j <= primes.length; j++) {
              if (i % primes[j] === 0) {
                  isPrime = false;
              }
          }
          if (isPrime) {
              primes.push(i);
          }
      }
      return primes;
  }
}