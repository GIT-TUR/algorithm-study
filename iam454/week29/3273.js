const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const x = Number(input[2]);

const map = new Map();
let answer = 0;

nums.forEach((num) => {
  map.set(x - num, true);
});

nums.forEach((num) => {
  if (map.has(num) && num !== x - num) {
    answer += 1;
    map.delete(num);
    map.delete(x - num);
  }
});

console.log(answer);
