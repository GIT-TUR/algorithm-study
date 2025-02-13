const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      arr = line.split(" ").map(Number);
      arr.sort((a, b) => a - b);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let min = Infinity;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let num = arr[i];
    let left = 0;
    let right = n - 1;
    while (left < right) {
      if (left === i) {
        left++;
        continue;
      }
      if (right === i) {
        right--;
        continue;
      }
      let sum = arr[left] + arr[right] + num;
      if (min > Math.abs(sum)) {
        if (sum > 0) {
          min = Math.abs(sum);
          ans = [arr[left], arr[right], num];
          right--;
        } else {
          min = Math.abs(sum);
          ans = [arr[left], arr[right], num];
          left++;
        }
      } else {
        sum > 0 ? right-- : left++;
      }
    }
  }
  console.log(ans.sort((a, b) => a - b).join(" "));
};
