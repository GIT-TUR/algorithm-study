const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [N, r, c] = input.split(" ").map(Number);

function z(n, r, c) {
  if (n === 0) {
    return 0;
  }

  const half = 1 << (n - 1);
  const area = half * half;

  if (r < half && c < half) {
    return z(n - 1, r, c);
  } else if (r < half && c >= half) {
    return area + z(n - 1, r, c - half);
  } else if (r >= half && c < half) {
    return 2 * area + z(n - 1, r - half, c);
  } else {
    return 3 * area + z(n - 1, r - half, c - half);
  }
}

console.log(z(N, r, c));
