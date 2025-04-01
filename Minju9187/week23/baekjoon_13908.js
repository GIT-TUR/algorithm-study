let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const numArr = m === 0 ? [] : input[0].split(" ").map(Number);

const visited = new Array(10).fill(false);
numArr.forEach((v) => (visited[v] = true));
let answer = 0;

function dfs(str, len, mCount) {
  if (len === n) {
    if (mCount === m) {
      answer++;
    }
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (visited[i]) {
      visited[i] = false;
      dfs(str + i, len + 1, mCount + 1);
      visited[i] = true;
      continue;
    }
    dfs(str + i, len + 1, mCount);
  }
}

dfs("", 0, 0);

console.log(answer);
