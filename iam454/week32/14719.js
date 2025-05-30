const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input[0].split(" ").map(Number);
const heights = input[1].split(" ").map(Number);

let left = 0;
let right = W - 1;
let leftMax = 0;
let rightMax = 0;
let answer = 0;

while (left < right) {
  if (heights[left] < heights[right]) {
    if (heights[left] >= leftMax) {
      leftMax = heights[left];
    } else {
      answer += leftMax - heights[left];
    }
    left += 1;
  } else {
    if (heights[right] >= rightMax) {
      rightMax = heights[right];
    } else {
      answer += rightMax - heights[right];
    }
    right -= 1;
  }
}

console.log(answer);
