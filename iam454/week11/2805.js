const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let l = 0;
let r = Math.max(...trees);
let ans = 0;

while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  let total = trees.reduce((acc, cur) => {
    if (cur >= mid) {
      return acc + cur - mid;
    } else {
      return acc;
    }
  }, 0);

  if (total >= M) {
    l = mid + 1;
    ans = mid;
  } else {
    r = mid - 1;
  }
}

console.log(ans);
