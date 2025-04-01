let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [T, W] = input.shift().split(" ").map(Number);
const apple = input.map((v) => Number(v));

const dp = Array.from({ length: T }, () => Array(W + 1).fill(0));

for (let i = 0; i <= W; i++) {
  if (apple[0] === 2) {
    if (i % 2 === 1) {
      dp[0][i] = 1;
    } else {
      dp[0][i] = 0;
    }
  } else {
    if (i % 2 === 1) {
      dp[0][i] = 0;
    } else {
      dp[0][i] = 1;
    }
  }
}

for (let i = 1; i < T; i++) {
  if (apple[i] === 1) {
    dp[i][0] = dp[i - 1][0] + 1;
  } else {
    dp[i][0] = dp[i - 1][0];
  }

  for (let j = 1; j <= W; j++) {
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    if (j % 2 === 0 && apple[i] === 1) {
      dp[i][j] += 1;
    } else if (j % 2 !== 0 && apple[i] === 2) {
      dp[i][j] += 1;
    }
  }
}

console.log(dp);

console.log(Math.max(...dp[T - 1]));
