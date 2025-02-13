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
      arr.push(parseInt(line));
      if (arr.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  if (n === 1) {
    console.log(arr[0]);
    return;
  }

  if (n === 2) {
    console.log(arr[0] + arr[1]);
    return;
  }
  let dp = Array.from({ length: n }, () => Array(2).fill(0));
  dp[0][0] = arr[0];
  dp[1][0] = arr[1];
  dp[1][1] = arr[0] + arr[1];
  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + arr[i];
    dp[i][1] = dp[i - 1][0] + arr[i];
  }
  console.log(Math.max(dp[n - 1][0], dp[n - 1][1]));
};
