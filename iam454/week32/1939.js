const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const info = input.slice(1, M + 1).map((line) => line.split(" ").map(Number));
const [start, end] = input[M + 1].split(" ").map(Number);

let maxW = 0;

const graph = Array.from({ length: N + 1 }, () => []);
for (const [A, B, C] of info) {
  graph[A].push([B, C]);
  graph[B].push([A, C]);
  maxW = Math.max(maxW, C);
}

function isValid(weight) {
  const visited = Array(N + 1).fill(false);
  const q = [];
  q.push(start);
  visited[start] = true;

  while (q.length) {
    const current = q.shift();

    if (current === end) {
      return true;
    }

    for (const [next, limit] of graph[current]) {
      if (!visited[next] && limit >= weight) {
        visited[next] = true;
        q.push(next);
      }
    }
  }

  return false;
}

let l = 1;
let r = maxW;
let ans = 0;

while (l <= r) {
  const mid = Math.floor((l + r) / 2);

  if (isValid(mid)) {
    ans = mid;
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(ans);
