const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const operations = input.map((line) => line.split(" ").map(Number));

const trains = Array.from({ length: N + 1 }, () => new Array(20).fill(0));

for (const op of operations) {
  const [command, i, x] = op;

  switch (command) {
    case 1:
      trains[i][x - 1] = 1;
      break;
    case 2:
      trains[i][x - 1] = 0;
      break;
    case 3:
      for (let j = 19; j > 0; j--) {
        trains[i][j] = trains[i][j - 1];
      }
      trains[i][0] = 0;
      break;
    case 4:
      for (let j = 0; j < 19; j++) {
        trains[i][j] = trains[i][j + 1];
      }
      trains[i][19] = 0;
      break;
  }
}

const uniqueTrains = new Set();

for (let i = 1; i <= N; i++) {
  uniqueTrains.add(trains[i].join(""));
}

console.log(uniqueTrains.size);
