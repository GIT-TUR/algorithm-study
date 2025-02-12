const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const board = input.map((item) => item.split(" ").map(Number));

let startX, startY;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 2) {
      startX = i;
      startY = j;
    }
  }
}

const visited = Array.from({ length: n }, () => new Array(m).fill(-1));
const q = [];
q.push([startX, startY]);
visited[startX][startY] = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (q.length) {
  const [cx, cy] = q.shift();

  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (visited[nx][ny] === -1 && board[nx][ny] !== 0) {
        visited[nx][ny] = visited[cx][cy] + 1;
        q.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) {
      line += "0 ";
    } else {
      line += `${visited[i][j]} `;
    }
  }
  console.log(line.trim());
}
