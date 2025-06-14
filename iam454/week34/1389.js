const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const info = input.map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => new Set());

for (const [A, B] of info) {
  graph[A].add(B);
  graph[B].add(A);
}

function bfs(start) {
  const visited = new Array(N + 1).fill(-1);
  const q = [];
  q.push([start, 0]);
  visited[start] = 0;

  while (q.length) {
    const [cur, depth] = q.shift();

    for (const next of graph[cur]) {
      if (visited[next] === -1) {
        visited[next] = depth + 1;
        q.push([next, depth + 1]);
      }
    }
  }

  let kevin = 0;
  for (const v of visited) {
    if (v !== -1) {
      kevin += v;
    }
  }

  return kevin;
}

let minKevin = Infinity;
let ans = 0;

for (let i = 1; i <= N; i++) {
  const kevin = bfs(i);
  if (minKevin > kevin) {
    minKevin = kevin;
    ans = i;
  }
}

console.log(ans);
