const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let trees = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map((el) => parseInt(el));
    } else {
      trees = line.split(" ").map((el) => parseInt(el));
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  trees.sort((a, b) => a - b);
  left = 0;
  right = trees[n - 1];
  let ans = 0;
  while (left <= right) {
    let sum = 0;
    let mid = Math.floor((left + right) / 2);
    for (let i = 0; i < n; i++) {
      if (trees[i] > mid) {
        sum += trees[i] - mid;
      }
    }
    if (m > sum) {
      right = mid - 1;
    } else {
      ans = mid;
      left = mid + 1;
    }
  }
  console.log(ans);
};
