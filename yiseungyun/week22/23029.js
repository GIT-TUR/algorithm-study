const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, food;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  food = input.slice(1).map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let DP = new Array(N).fill(0);

  DP[0] = food[0];
  if (N === 1) return DP[0];
  DP[1] = Math.max(food[0]+Math.floor(food[1]/2), food[1]);

  for (let i = 1; i < N; i++) {
    if (i-3 >= 0) DP[i] = Math.max(DP[i-2]+food[i], DP[i-3]+food[i-1]+Math.floor(food[i]/2));
    else if (i-2 >= 0) DP[i] = Math.max(DP[i-2]+food[i], food[i-1]+Math.floor(food[i]/2));
    DP[i] = Math.max(DP[i], DP[i-1]);
  }

  return DP[N-1];
}
