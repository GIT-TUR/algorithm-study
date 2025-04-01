let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const positions = input.shift().split(" ").map(Number);
const fuels = input.shift().split(" ").map(Number);

let leftIdx = S - 1;
let rightIdx = S - 1;
let left = positions[leftIdx] - fuels[leftIdx];
let right = positions[rightIdx] + fuels[rightIdx];
let min = Infinity;
let max = 0;
const answer = [];

while (true) {
  for (let i = leftIdx - 1; i >= 0; i--) {
    if (positions[i] >= left) {
      min = Math.min(min, positions[i] - fuels[i]);
      max = Math.max(max, positions[i] + fuels[i]);
      leftIdx = i;
    } else {
      break;
    }
  }

  for (let i = rightIdx + 1; i < N; i++) {
    if (positions[i] <= right) {
      min = Math.min(min, positions[i] - fuels[i]);
      max = Math.max(max, positions[i] + fuels[i]);
      rightIdx = i;
    } else {
      break;
    }
  }

  if (left === min && right === max) break;

  left = min;
  right = max;
}

for (let i = leftIdx; i <= rightIdx; i++) {
  answer.push(i + 1);
}

console.log(answer.join(" "));
