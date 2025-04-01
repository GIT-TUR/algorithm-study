let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const arr = input.map((v) => Number(v)).sort((a, b) => a - b);

let left = 1;
let right = arr[arr.length - 1] - arr[0];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let cnt = 1;
  let prev = arr[0];

  for (let i = 1; i < N; i++) {
    if (arr[i] - prev >= mid) {
      cnt++;
      prev = arr[i];
    }
  }

  if (cnt >= C) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
