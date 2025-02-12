const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const values = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;
const ans = new Array(3).fill(0);

for (let first = 0; first < N - 2; first++) {
  let second = first + 1;
  let third = N - 1;

  while (second < third) {
    const sum = values[first] + values[second] + values[third];

    if (Math.abs(sum) < Math.abs(min)) {
      min = sum;
      ans[0] = values[first];
      ans[1] = values[second];
      ans[2] = values[third];
    }

    if (sum < 0) {
      second += 1;
    } else {
      third -= 1;
    }
  }
}

console.log(ans.join(" "));
