const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(0));

const q = [];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (board[i][j] === 1) {
      q.push([i, j]);
      visited[i][j] = 1;
    } else if (board[i][j] === -1) {
      visited[i][j] = -1;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];
let index = 0;

while (index < q.length) {
  const [cx, cy] = q[index++];

  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (visited[nx][ny] === 0 && board[nx][ny] !== -1) {
        visited[nx][ny] = visited[cx][cy] + 1;
        q.push([nx, ny]);
      }
    }
  }
}

let answer = 0;
let isValid = true;

for (let i = 0; i < visited.length; i++) {
  for (let j = 0; j < visited[0].length; j++) {
    if (visited[i][j] === 0) {
      isValid = false;
      break;
    }
    answer = Math.max(answer, visited[i][j]);
  }
  if (isValid === false) {
    break;
  }
}

console.log(isValid ? answer - 1 : -1);
