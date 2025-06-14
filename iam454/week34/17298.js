const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const A = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const ans = new Array(A).fill(-1);
const stack = [];

for (let i = 0; i < A; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    const index = stack.pop();
    ans[index] = arr[i];
  }
  stack.push(i);
}

console.log(ans.join(" "));
