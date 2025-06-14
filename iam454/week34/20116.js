const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, L] = input[0].split(" ").map(Number);
const xCors = input[1].split(" ").map(Number);

const sum = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  sum[i + 1] = sum[i] + xCors[i];
}

let isStable = true;

for (let i = 0; i < n - 1; i++) {
  const sumAbove = sum[n] - sum[i + 1];
  const countAbove = n - (i + 1);
  const avg = sumAbove / countAbove;

  const left = xCors[i] - L;
  const right = xCors[i] + L;

  if (avg <= left || avg >= right) {
    isStable = false;
    break;
  }
}

console.log(isStable ? "stable" : "unstable");
