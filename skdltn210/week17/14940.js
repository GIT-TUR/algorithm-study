const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];
let lineCnt = 0;

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      lineCnt++;
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
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  let ans = Array(n)
    .fill()
    .map(() => Array(m).fill(-1));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        ans[i][j] = 0;
      }
    }
  }

  const bfs = (b, a) => {
    let queue = [];
    queue.push([b, a]);
    visited[b][a] = true;
    ans[b][a] = 0;
    while (queue.length > 0) {
      let [y, x] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
          if (!visited[ny][nx] && arr[ny][nx] !== 0) {
            queue.push([ny, nx]);
            visited[ny][nx] = true;
            ans[ny][nx] = ans[y][x] + 1;
          }
        }
      }
    }
  };

  let flag = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) {
        bfs(i, j);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }

  for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
  }
};
