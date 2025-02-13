const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let currentCase = 0;
let n;
let arr = [];
let graph = {};
let visited = [];

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else if (n === undefined) {
      n = parseInt(line);
      visited = Array(n + 2).fill(false);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n + 2) {
        solution();
        n = undefined;
        arr = [];
        graph = {};
        currentCase++;
        if (currentCase === t) {
          readline.close();
        }
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  graph = {};
  visited = Array(n + 2).fill(false);

  for (let i = 0; i < n + 2; i++) {
    for (let j = 0; j < n + 2; j++) {
      if (i === j) continue;
      if (
        Math.abs(arr[i][0] - arr[j][0]) + Math.abs(arr[i][1] - arr[j][1]) <=
        1000
      ) {
        if (!graph[i]) graph[i] = [];
        if (!graph[j]) graph[j] = [];
        if (!graph[i].includes(j)) graph[i].push(j);
        if (!graph[j].includes(i)) graph[j].push(i);
      }
    }
  }

  const dfs = (x) => {
    visited[x] = true;
    for (let next of graph[x] || []) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  dfs(0);
  console.log(visited[n + 1] ? "happy" : "sad");
};
