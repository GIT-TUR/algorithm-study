const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < K; i++) {
  sum += arr[i];
}

let max = sum;

for (let i = K; i < N; i++) {
  sum = sum - arr[i - K] + arr[i];
  if (sum > max) {
    max = sum;
  }
}

console.log(max);
