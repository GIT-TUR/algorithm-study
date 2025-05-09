const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const info = input.map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

for (const [a, b] of info) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}

const dfsAnswer = [];
const bfsAnswer = [];

const dfsVisited = new Set();
const bfsVisited = new Set();

function dfs(node) {
  dfsVisited.add(node);
  dfsAnswer.push(node);

  for (let i = 1; i <= N; i++) {
    if (graph[node][i] === 1 && !dfsVisited.has(i)) {
      dfs(i);
    }
  }
}

function bfs(node) {
  const q = [];
  q.push(node);
  bfsVisited.add(node);
  bfsAnswer.push(node);

  while (q.length) {
    const curNode = q.shift();

    for (let i = 1; i <= N; i++) {
      if (graph[curNode][i] === 1 && !bfsVisited.has(i)) {
        q.push(i);
        bfsVisited.add(i);
        bfsAnswer.push(i);
      }
    }
  }
}

dfs(V);
bfs(V);

const result = `${dfsAnswer.join(" ")}\n${bfsAnswer.join(" ")}`;
console.log(result);
