let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const numArr = input[0].split(" ").map(Number);
const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  const prevArr = numArr.slice(0, i);
  const temp = [];

  for (let j = 0; j <= i; j++) {
    if (prevArr[j] < numArr[i]) {
      temp.push(dp[j]);
    }
  }
  if (temp.length !== 0) {
    dp[i] += Math.max(...temp);
  }
}

console.log(dp);

console.log(Math.max(...dp));
