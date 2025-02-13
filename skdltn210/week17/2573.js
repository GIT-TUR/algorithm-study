const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let year = 0;
  let visited;
  let meltArr;

  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  const melt = (y, x) => {
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (arr[ny][nx] === 0) {
        meltArr[y][x]++;
      }
    }
  };

  const bfs = (y, x) => {
    let queue = [[y, x]];
    visited[y][x] = true;

    while (queue.length) {
      let [cy, cx] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let ny = cy + dy[i];
        let nx = cx + dx[i];
        if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
          if (!visited[ny][nx] && arr[ny][nx] !== 0) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
    }
  };

  while (true) {
    let cnt = 0;

    meltArr = Array.from({ length: n }, () => Array(m).fill(0));
    visited = Array.from({ length: n }, () => Array(m).fill(false));

    let hasZero = false;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] === 0) {
          hasZero = true;
          break;
        }
      }
      if (hasZero) break;
    }

    if (!hasZero) {
      year = 0;
      break;
    }

    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        if (arr[i][j] > 0 && !visited[i][j]) {
          bfs(i, j);
          cnt++;
        }
      }
    }

    if (cnt === 0) {
      year = 0;
      break;
    } else if (cnt >= 2) {
      break;
    }

    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        if (arr[i][j] > 0) {
          melt(i, j);
        }
      }
    }

    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        arr[i][j] = Math.max(0, arr[i][j] - meltArr[i][j]);
      }
    }

    year++;
  }
  console.log(year);
};
