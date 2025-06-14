const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const values = input[1].split(" ").map(Number);

values.sort((a, b) => a - b);

let l = 0;
let r = N - 1;
let min = Infinity;

const result = [];

while (l < r) {
  const sum = values[l] + values[r];

  if (min > Math.abs(sum)) {
    min = Math.abs(sum);
    result[0] = values[l];
    result[1] = values[r];
  }

  if (sum > 0) {
    r -= 1;
  } else if (sum < 0) {
    l += 1;
  } else {
    break;
  }
}

console.log(`${result[0]} ${result[1]}`);
