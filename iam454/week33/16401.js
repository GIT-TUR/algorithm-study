const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const snacks = input[1].split(" ").map(Number);

let l = 1;
let r = Math.max(...snacks);

let ans = 0;

while (l <= r) {
  const mid = Math.floor((l + r) / 2);
  let count = 0;

  for (const snack of snacks) {
    if (snack >= mid) {
      count += Math.floor(snack / mid);
    }
  }

  if (count >= M) {
    l = mid + 1;
    ans = mid;
  } else {
    r = mid - 1;
  }
}

console.log(ans);
