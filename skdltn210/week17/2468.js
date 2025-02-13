const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let map = [];
let lineCnt = 0;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      lineCnt++;
      map.push(line.split(" ").map(Number));
      if (lineCnt === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let max = 0;
  let visited = [];

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const bfs = (y, x, h) => {
    visited[y][x] = true;
    let queue = [[y, x]];
    while (queue.length) {
      const [cy, cx] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const ny = cy + dy[i];
        const nx = cx + dx[i];
        if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
          if (!visited[ny][nx] && map[ny][nx] > h) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
    }
  };

  for (let h = 100; h >= 0; h--) {
    visited = Array.from(Array(n), () => Array(n).fill(false));
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j] && map[i][j] > h) {
          bfs(i, j, h);
          cnt++;
        }
      }
    }
    max = Math.max(max, cnt);
  }

  console.log(max);
};
