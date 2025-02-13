const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, k, x;
let lineCnt = 0;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m, k, x] = line.split(" ").map(Number);
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

const solution = () => {
  let graph = {};
  let queue = [];
  let cnt = 0;
  let last;
  let visited = Array(n).fill(false);
  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i];
    if (!graph[a]) {
      graph[a] = [];
    }
    if (!graph[b]) {
      graph[b] = [];
    }
    graph[a].push(b);
  }
  const bfs = (start) => {
    queue.push(start);
    visited[start] = true;
    while (queue.length) {
      let len = queue.length;
      for (let j = 0; j < len; j++) {
        const node = queue.shift();
        for (let i = 0; i < graph[node].length; i++) {
          const next = graph[node][i];
          if (!visited[next]) {
            queue.push(next);
            visited[next] = true;
          }
        }
      }
      cnt++;
      if (cnt === k) break;
    }
    if (queue.length === 0) {
      console.log(-1);
    } else {
      queue.sort((a, b) => a - b);
      queue.forEach((el) => console.log(el));
    }
  };
  bfs(x);
};
