const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const fruits = input[1].split(" ").map(Number);

let l = 0;
let r = 0;
let ans = 0;
let map = new Map();

while (r < N) {
  map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

  while (map.size > 2) {
    map.set(fruits[l], map.get(fruits[l]) - 1);
    if (map.get(fruits[l]) === 0) {
      map.delete(fruits[l]);
    }
    l += 1;
  }

  ans = Math.max(ans, r - l + 1);
  r += 1;
}

console.log(ans);
