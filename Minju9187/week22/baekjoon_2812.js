let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.toString().split("").map(Number);

const answer = [arr[0]];

for (let i = 1; i < N; i++) {
  if (answer[answer.length - 1] < arr[i]) {
    while (answer.length > 0) {
      if (answer.length + N - i === N - K) {
        break;
      }

      if (answer[answer.length - 1] < arr[i]) {
        answer.pop();
      } else {
        break;
      }
    }
    answer.push(arr[i]);
  } else {
    answer.push(arr[i]);
  }
}

if (answer.length > N - K) {
  while (answer.length > N - K) {
    answer.pop();
  }
}

console.log(answer.join(""));
