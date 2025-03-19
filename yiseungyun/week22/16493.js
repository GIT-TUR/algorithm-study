const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, books;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(' ').map(Number)
  books = input.slice(1).map(i => i.split(' ').map(Number));
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => { 
  let DP = new Array(N+1).fill(0);
  books.sort((a, b) => b[0] - a[0]); 

  for (const [d, page] of books) {
    for (let i = N; i > 0; i--) {
      if (i-d >= 0) DP[i] = Math.max(DP[i], DP[i-d]+page); 
    }
  }

  return Math.max(...DP);
}
