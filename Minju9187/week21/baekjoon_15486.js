let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((v) => v.split(" ").map(Number));

let answer = 0;
const dp = new Array(N + 1).fill(0);
let max = 0;

for (let i = 0; i < N; i++) {
  max = Math.max(max, dp[i]);
  const [day, pay] = arr[i];
  if (i + day <= N) dp[i + day] = Math.max(dp[i + day], max + pay);
}

answer = Math.max(...dp);

console.log(answer);

// function calcMaxProfit(day, profit) {
//   if (day >= N) {
//     answer = Math.max(answer, profit);
//     return;
//   }
//   if (day + arr[day][0] <= N) {
//     calcMaxProfit(day + arr[day][0], profit + arr[day][1]);
//   }
//   calcMaxProfit(day + 1, profit);
// }

// calcMaxProfit(0, 0);

// console.log(answer);
