const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const table = input.map((item) => item.split(" ").map(Number));

const dp = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [T, P] = table[i];

  if (i + T <= N) {
    dp[i + T] = Math.max(dp[i + T], dp[i] + P);
  }

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);
}

console.log(dp[N]);
