const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const list = input.map((line) => line.split(" ").map(Number));

const set = new Set();
const balls = new Array(N + 1).fill(-1);

for (let i = 0; i < M; i++) {
  const [L, R] = list[i];
  for (let j = L; j <= R; j++) {
    balls[j] = i;
  }
}

for (let i = 1; i <= N; i++) {
  if (balls[i] !== -1) {
    set.add(balls[i]);
  }
}

const result = 2n ** BigInt(set.size);
console.log(result.toString());
