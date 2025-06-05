const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const result = [0];

let max = 0;
let prevEl = arr[0];
let minEl = arr[0];

for (let i = 1; i < N; i++) {
  if (arr[i] > prevEl) {
    max = Math.max(max, arr[i] - minEl);
  }
  result.push(max);
  minEl = Math.min(minEl, arr[i]);
  prevEl = arr[i];
}

console.log(result.join(" "));
