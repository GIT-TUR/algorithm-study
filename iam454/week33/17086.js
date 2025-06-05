const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));
const dist = Array.from({ length: N }, () => new Array(M).fill(-1));

const q = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      q.push([i, j]);
      dist[i][j] = 0;
    }
  }
}

const dx = [1, 1, 0, -1, -1, -1, 0, 1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

while (q.length) {
  const [x, y] = q.shift();

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
}

const maxDist = Math.max(...dist.flat());
console.log(maxDist);
