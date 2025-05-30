const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = arr[0];
let l = 0;
let r = 0;

let answer = 0;

while (l < N) {
  if (sum === M) {
    answer += 1;
  }

  if (sum >= M) {
    sum -= arr[l++];
  } else {
    r += 1;
    if (r === N) {
      break;
    }
    sum += arr[r];
  }
}

console.log(answer);
