const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let time = 0;
let icebergCount = 0;
let isAllMelted = false;

while (true) {
  icebergCount = 0;
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== 0 && visited[i][j] === 0) {
        icebergCount += 1;
        if (icebergCount > 1) {
          break;
        }
        dfs(i, j, visited);
      }
    }
    if (icebergCount > 1) {
      break;
    }
  }

  if (icebergCount === 0) {
    isAllMelted = true;
    break;
  }

  if (icebergCount > 1) {
    break;
  }

  const oceans = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== 0) {
        const oceanCount = getOceanCount(i, j);
        oceans[i][j] = oceanCount;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (oceans[i][j] !== 0) {
        board[i][j] = Math.max(0, board[i][j] - oceans[i][j]);
      }
    }
  }

  time += 1;
}

console.log(isAllMelted ? 0 : time);

function getOceanCount(x, y) {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (board[nx][ny] === 0) {
        count += 1;
      }
    }
  }
  return count;
}

function dfs(x, y, visited) {
  visited[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (board[nx][ny] !== 0 && visited[nx][ny] === 0) {
        dfs(nx, ny, visited);
      }
    }
  }
}
