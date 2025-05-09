const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const k = Number(input);

let size = 1;
while (size < k) {
  size *= 2;
}

let cuts = 0;

if (k === size) {
  console.log(`${size} ${cuts}`);
  return;
}

let pieces = 0;
let cutSize = size;

while (pieces < k) {
  cutSize /= 2;
  cuts += 1;

  if (pieces + cutSize <= k) {
    pieces += cutSize;
  }
}

console.log(`${size} ${cuts}`);
