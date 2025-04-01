let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const numArr = input[0].split(" ").map(Number);
const dp = new Array(N).fill(0);
dp[0] = numArr[0];
let count = 0;

for (let i = 1; i < N; i++) {
  if (numArr[i] > dp[count]) {
    dp[++count] = numArr[i];
  } else {
    let targetIdx = binarySearch(count, numArr[i], dp);
    dp[targetIdx] = numArr[i];
  }
}

console.log(count + 1);

function binarySearch(right, target, dp) {
  let left = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (dp[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(dp);
