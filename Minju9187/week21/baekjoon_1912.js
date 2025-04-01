let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const dp = new Array(N + 1);
let answer = -999999999;
dp[0] = arr[0];
answer = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  answer = Math.max(dp[i], answer);
}

console.log(answer);
