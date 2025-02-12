const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = input.map((item) => item.split(" ").map(Number));

const cctvs = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] >= 1 && board[i][j] <= 5) {
      cctvs.push([board[i][j], i, j]);
    }
  }
}

// 0: 위, 1: 오른쪽, 2: 아래, 3: 왼쪽
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const cctvDirections = [
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

let ans = Infinity;

function dfs(board, idx) {
  if (idx === cctvs.length) {
    let zeroCnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 0) {
          zeroCnt += 1;
        }
      }
    }
    ans = Math.min(ans, zeroCnt);
    return;
  }

  const [cctvType, x, y] = cctvs[idx];

  for (const cdirs of cctvDirections[cctvType]) {
    const copyBoard = board.map((item) => item.slice());

    for (const cdir of cdirs) {
      const [dx, dy] = directions[cdir];
      let nx = x + dx;
      let ny = y + dy;

      while (true) {
        if (nx < 0 || nx >= N || ny < 0 || ny >= M || copyBoard[nx][ny] === 6) {
          break;
        }
        if (copyBoard[nx][ny] === 0) {
          copyBoard[nx][ny] = "#";
        }
        nx += dx;
        ny += dy;
      }
    }

    dfs(copyBoard, idx + 1);
  }
}

dfs(board, 0);

console.log(ans);
