const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let sum = arr[0];
let answer = N;
let isValid = false;

while (start < N) {
  if (sum >= S) {
    isValid = true;
    answer = Math.min(answer, end - start + 1);
    sum -= arr[start++];
  } else {
    end += 1;
    if (end === N) {
      break;
    }
    sum += arr[end];
  }
}

console.log(isValid ? answer : 0);
