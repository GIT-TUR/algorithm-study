let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((v) => v.split(" ").map(Number));

const dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const [period, profit] = arr[i];
  if (i + period > N) continue;
  dp[i] = dp[i] + profit;

  for (let j = i + period; j < N; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}

console.log(Math.max(...dp));
