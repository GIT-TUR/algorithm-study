const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const chocolates = input[1].split(" ").map(Number);

let sum = 0;
let days = 0;

while (true) {
  let flag = false;

  for (let i = K; i < N; i++) {
    if (chocolates[i] > chocolates[i - K]) {
      sum += chocolates[i] - chocolates[i - K];
      days += 1;
      chocolates[i] = chocolates[i - K];
      chocolates.sort((a, b) => a - b);
      flag = true;
      break;
    }
  }

  if (!flag) {
    break;
  }
}

console.log(`${sum} ${days}`);
