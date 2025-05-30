const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const nodes = input.map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);

for (const [a, b, w] of nodes) {
  graph[a].push([b, w]);
  graph[b].push([a, w]);
}

function dfs(node) {
  const visited = new Array(n + 1).fill(0);
  const dist = new Map();
  const st = [];
  st.push([node, 0]);
  visited[node] = 1;

  while (st.length) {
    const [curNode, curWeight] = st.pop();

    for (const [nextNode, nextWeight] of graph[curNode]) {
      if (visited[nextNode] === 0) {
        visited[nextNode] = 1;
        const newWeight = curWeight + nextWeight;
        dist.set(nextNode, newWeight);
        st.push([nextNode, newWeight]);
      }
    }
  }

  let maxNode = 0;
  let maxDist = 0;
  for (const [k, v] of dist) {
    if (v > maxDist) {
      maxDist = v;
      maxNode = k;
    }
  }

  return { maxNode, maxDist };
}

const { maxNode: maxNodeFromRoot } = dfs(1);
const { maxDist: maxDistFromMaxNode } = dfs(maxNodeFromRoot);

console.log(maxDistFromMaxNode);
