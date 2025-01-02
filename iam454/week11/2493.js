const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const towers = input[1].split(" ").map(Number);

const ans = new Array(N).fill(0);
const st = [];

for (let i = N - 1; i >= 0; i--) {
  while (st.length && towers[st[st.length - 1]] < towers[i]) {
    const idx = st.pop();
    ans[idx] = i + 1;
  }
  st.push(i);
}

console.log(ans.join(" "));
