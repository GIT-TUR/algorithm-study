const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, a, b, m;
let arr = [];
let graph = {};
let visited = [];
let ans = -1;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else if (!a) {
      [a, b] = line.split(" ").map(Number);
    } else if (!m) {
      m = parseInt(line);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === m) {
        arr.forEach(([x, y]) => {
          if (!graph[x]) graph[x] = [];
          if (!graph[y]) graph[y] = [];
          graph[x].push(y);
          graph[y].push(x);
        });
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const dfs = (a, b, depth) => {
  if (a === b) {
    ans = depth;
    return true;
  }
  visited[a] = true;
  for (next of graph[a]) {
    if (!visited[next]) {
      if (dfs(next, b, depth + 1)) return true;
    }
  }
};

const solution = () => {
  visited = Array(n + 1).fill(false);
  dfs(a, b, 0);
  console.log(ans);
};
