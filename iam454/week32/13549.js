const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [N, K] = input.split(" ").map(Number);
const MAX = 100001;
const time = Array(MAX).fill(Infinity);

const q = [];
q.push(N);
time[N] = 0;

while (q.length) {
  const current = q.shift();

  if (current === K) {
    break;
  }

  const teleport = current * 2;
  if (teleport < MAX && time[teleport] > time[current]) {
    time[teleport] = time[current];
    q.unshift(teleport);
  }
  const moveLeft = current - 1;
  if (moveLeft >= 0 && time[moveLeft] > time[current] + 1) {
    time[moveLeft] = time[current] + 1;
    q.push(moveLeft);
  }
  const moveRight = current + 1;
  if (moveRight < MAX && time[moveRight] > time[current] + 1) {
    time[moveRight] = time[current] + 1;
    q.push(moveRight);
  }
}

console.log(time[K]);
