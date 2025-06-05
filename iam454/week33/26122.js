const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const K = Number(input[0]);
const str = input[1];

const blocks = [];
let i = 0;

while (i < K) {
  const char = str[i];
  let count = 0;
  while (i < K && str[i] === char) {
    count++;
    i++;
  }
  blocks.push({ char, count });
}

let ans = 0;

for (let i = 0; i < blocks.length - 1; i++) {
  const cur = blocks[i];
  const next = blocks[i + 1];

  if (cur.char !== next.char) {
    ans = Math.max(ans, 2 * Math.min(cur.count, next.count));
  }
}

console.log(ans);
