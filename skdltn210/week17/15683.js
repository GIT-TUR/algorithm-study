const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let dir = [
  [],
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  [[0, 1, 2, 3]],
];
let cctvs = [];
let min = Infinity;

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
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] !== 0 && arr[i][j] !== 6) {
        cctvs.push([i, j]);
      }
    }
  }

  const check = (y, x, direction) => {
    const changed = [];

    for (let d of direction) {
      let ny = y;
      let nx = x;

      while (true) {
        ny += dy[d];
        nx += dx[d];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n || arr[ny][nx] === 6) break;

        if (arr[ny][nx] === 0) {
          changed.push([ny, nx]);
          arr[ny][nx] = "#";
        }
      }
    }

    return changed;
  };

  const countBlindSpot = () => {
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] === 0) count++;
      }
    }
    return count;
  };

  const dfs = (depth) => {
    if (depth === cctvs.length) {
      min = Math.min(min, countBlindSpot());
      return;
    }

    const [y, x] = cctvs[depth];
    const type = arr[y][x];

    for (let directions of dir[type]) {
      const changed = check(y, x, directions);

      dfs(depth + 1);

      for (const [cy, cx] of changed) {
        arr[cy][cx] = 0;
      }
    }
  };

  dfs(0);
  console.log(min);
};
