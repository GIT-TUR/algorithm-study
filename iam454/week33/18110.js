const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());

if (n === 0) {
  console.log(0);
  return;
}
const opinions = input.map(Number);
opinions.sort((a, b) => a - b);

const cut = Math.round(n * 0.15);
let sum = 0;

for (let i = cut; i < n - cut; i++) {
  sum += opinions[i];
}

console.log(Math.round(sum / (n - 2 * cut)));
