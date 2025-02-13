const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, v;
let arr = [];
let lineCnt = 0;
let graph = {};

readline
  .on("line", (line) => {
    if (!n) {
      [n, m, v] = line.split(" ").map(Number);
    } else {
      lineCnt++;
      arr.push(line.split(" ").map(Number));
      if (lineCnt === m) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const dfs = (x, visited, ans) => {
  visited[x] = true;
  ans.push(x);
  if (graph[x]) {
    for (const next of graph[x]) {
      if (!visited[next]) {
        dfs(next, visited, ans);
      }
    }
  }
  return ans;
};

const bfs = (x, visited, ans) => {
  visited[x] = true;
  ans.push(x);
  let queue = [x];
  while (queue.length) {
    let v = queue.shift();
    if (graph[v]) {
      for (const next of graph[v]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          ans.push(next);
        }
      }
    }
  }
  return ans;
};

const solution = () => {
  for (let i = 0; i < arr.length; i++) {
    if (!graph[arr[i][0]]) {
      graph[arr[i][0]] = [];
    }
    if (!graph[arr[i][1]]) {
      graph[arr[i][1]] = [];
    }
    graph[arr[i][0]].push(arr[i][1]);
    graph[arr[i][1]].push(arr[i][0]);
  }
  for (let key in graph) {
    graph[key].sort((a, b) => a - b);
  }
  let visited = Array(n + 1).fill(false);
  let ans = [];
  console.log(dfs(v, visited, ans).join(" "));
  visited = Array(n).fill(false);
  ans = [];
  console.log(bfs(v, visited, ans).join(" "));
};
