const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, m;
let arr = [];
let cnt = 0;
let graph = {};
let visited;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else if (!m) {
      m = parseInt(line);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === m) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    visited = Array(n + 1).fill(false);
    solution();
    process.exit();
  });

const dfs = (x) => {
  visited[x] = true;
  cnt++;
  if (graph[x]) {
    for (const next of graph[x]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  }
  return cnt;
};

const solution = () => {
  for (let i = 0; i < m; i++) {
    const [a, b] = arr[i];
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(dfs(1) - 1);
};
