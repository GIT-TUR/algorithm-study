let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const availableAppArr = input.shift().split(" ").map(Number);
const costAppArr = input.shift().split(" ").map(Number);

const sumCost = costAppArr.reduce((pre, cur) => pre + cur, 0);
const dp = new Array(sumCost + 1).fill(0);

for (let i = 0; i < N; i++) {
  const memory = availableAppArr[i];
  const cost = costAppArr[i];

  for (let j = sumCost; j >= cost; j--) {
    dp[j] = Math.max(dp[j], dp[j - cost] + memory);
  }
}

console.log(dp.findIndex((it) => it >= M));

// let minSumCost = Infinity;

// function dfs(idx, sumMemory, sumCost) {
//   if (sumMemory >= M) {
//     minSumCost = Math.min(sumCost, minSumCost);
//     return;
//   }

//   if (idx === N) {
//     return;
//   }
//   dfs(idx + 1, sumMemory, sumCost);
//   dfs(idx + 1, sumMemory + availableAppArr[idx], sumCost + costAppArr[idx]);
// }

// dfs(0, 0, 0);

// console.log(minSumCost);
