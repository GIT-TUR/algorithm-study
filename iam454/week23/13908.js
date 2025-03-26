const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const requiredDigits = m > 0 ? input[1].split(" ").map(String) : [];
let count = 0;

function dfs(str, cnt) {
  if (cnt === n) {
    if (m === 0 || requiredDigits.every((digit) => str.includes(digit))) {
      count += 1;
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    dfs(str + String(i), cnt + 1);
  }
}

dfs("", 0);

console.log(count);
