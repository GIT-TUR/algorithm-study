const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

function getPrimes(num) {
  const isPrime = Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

const primes = getPrimes(N);

let ans = 0;
let l = 0;
let r = 0;
let sum = 0;

while (r <= primes.length) {
  if (sum === N) {
    ans += 1;
    sum -= primes[l];
    l += 1;
  } else if (sum < N) {
    sum += primes[r];
    r += 1;
  } else {
    sum -= primes[l];
    l += 1;
  }
}

console.log(ans);
