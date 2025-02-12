const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const scores = input.map(Number);

const dp = new Array(N).fill(0);

dp[0] = scores[0];
dp[1] = scores[0] + scores[1];
dp[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + scores[i],
    dp[i - 3] + scores[i - 1] + scores[i]
  );
}

console.log(dp[N - 1]);
