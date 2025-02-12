const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
input.forEach((item) => {
  const [start, end] = item.split(" ").map(Number);
  graph[start].push(end);
});

const visited = new Array(N + 1).fill(0);

const q = [];
q.push([X, 0]);
visited[X] = 1;

const res = [];

while (q.length) {
  const [cur, cnt] = q.shift();

  if (cnt === K) {
    res.push(cur);
    continue;
  }

  for (let i = 0; i < graph[cur].length; i++) {
    const next = graph[cur][i];

    if (visited[next] === 0) {
      visited[next] = 1;
      q.push([next, cnt + 1]);
    }
  }
}

console.log(res.length === 0 ? -1 : res.sort((a, b) => a - b).join("\n"));
