const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];
let lineCnt = 0;
let cnt = 0;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      lineCnt++;
      arr.push(line.split("").map(Number));
      if (lineCnt === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const bfs = (visited) => {
  let queue = [[0, 0]];
  visited[0][0] = true;
  while (queue.length) {
    let len = queue.length;
    for (let j = 0; j < len; j++) {
      let next = queue.shift();
      if (next[0] === n - 1 && next[1] === m - 1) {
        console.log(cnt + 1);
        return;
      }
      for (let i = 0; i < 4; i++) {
        const ny = next[0] + dy[i];
        const nx = next[1] + dx[i];
        if (
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          arr[ny][nx] === 1 &&
          !visited[ny][nx]
        ) {
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
    cnt++;
  }
};

const solution = () => {
  let visited = new Array(n + 1)
    .fill(0)
    .map(() => new Array(m + 1).fill(false));
  bfs(visited);
};
