const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const heights = input.map((line) => line.split(" ").map(Number));

const indegree = new Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);

for (const [A, B] of heights) {
  indegree[B] += 1;
  graph[A].push(B);
}

const q = [];

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) {
    q.push(i);
  }
}

const result = [];

while (q.length) {
  const current = q.shift();
  result.push(current);
  for (const next of graph[current]) {
    indegree[next] -= 1;
    if (indegree[next] === 0) {
      q.push(next);
    }
  }
}

console.log(result.join(" "));
