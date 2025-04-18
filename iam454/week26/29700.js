const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const board = input.map((item) => item.split(""));

let ans = 0;

for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "0") {
      cnt += 1;
      if (cnt >= K) {
        ans += 1;
      }
    } else {
      cnt = 0;
    }
  }
}

console.log(ans);
