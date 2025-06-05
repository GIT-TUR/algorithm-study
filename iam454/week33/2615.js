const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const board = input.map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, 1],
];

function isValid(x, y) {
  return x >= 0 && x < 19 && y >= 0 && y < 19;
}

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    const stone = board[i][j];

    if (stone === 0) {
      continue;
    }

    for (const [dx, dy] of directions) {
      let count = 1;
      let nx = i + dx;
      let ny = j + dy;

      while (isValid(nx, ny) && board[nx][ny] === stone) {
        count += 1;
        nx += dx;
        ny += dy;
      }

      if (count === 5) {
        const beforeX = i - dx;
        const beforeY = j - dy;
        if (isValid(beforeX, beforeY) && board[beforeX][beforeY] === stone) {
          continue;
        }

        console.log(stone);
        console.log(i + 1, j + 1);
        return;
      }
    }
  }
}

console.log(0);
