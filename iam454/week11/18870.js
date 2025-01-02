const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const points = input[1].split(" ").map(Number);

const set = new Set();
for (let point of points) {
  set.add(point);
}
const sorted = Array.from(set).sort((a, b) => a - b);

const map = new Map();

for (let item of sorted) {
  map.set(item, map.size);
}

const ans = points.map((point) => map.get(point));
console.log(ans.join(" "));
