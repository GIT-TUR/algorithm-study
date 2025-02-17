const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, bluray;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(' ').map(Number);
  bluray = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let minBlurayLength = Infinity;
  let start = Math.max(...bluray);
  let end = bluray.reduce((sum, curr) => sum += curr, 0);

  while (start <= end) {
    const mid = Math.floor((start+end)/2);
    let blurayCount = 1;
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (sum+bluray[i] <= mid) {
        sum += bluray[i];
      } else {
        sum = bluray[i];
        blurayCount++;
      }
    }

    if (blurayCount <= M) {
      end = mid-1;
      minBlurayLength = Math.min(minBlurayLength, mid);
    } else {
      start = mid+1;
    }
  }

  return minBlurayLength;
}
