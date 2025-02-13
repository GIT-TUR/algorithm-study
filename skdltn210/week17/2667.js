const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let map = [];
let visited;
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      map.push(line.split("").map(Number));
      if (map.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    visited = Array(n)
      .fill()
      .map(() => Array(n).fill(false));
    solution();
    process.exit();
  });

const dfs = (y, x) => {
  visited[y][x] = true;
  let cnt = 1;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
      if (map[ny][nx] === 1 && !visited[ny][nx]) {
        cnt += dfs(ny, nx);
      }
    }
  }
  return cnt;
};

const solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        arr.push(dfs(i, j));
      }
    }
  }
  console.log(arr.length);
  arr.sort((a, b) => a - b);
  arr.forEach((el) => console.log(el));
};
