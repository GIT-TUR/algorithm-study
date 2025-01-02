const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

const dp = Array(100000).fill(Infinity);

if (N >= K) {
  console.log(N - K);
  return;
}

for (let i = 0; i < N; i++) {
  dp[i] = N - i;
}

dp[N] = 0;

for (let i = N + 1; i <= K; i++) {
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
  } else {
    dp[i] = Math.min(dp[i - 1] + 1, dp[(i + 1) / 2] + 2);
  }
}

console.log(dp[K]);
