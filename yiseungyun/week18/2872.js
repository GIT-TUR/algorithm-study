const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, books;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  books = input.slice(1).map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let length = 1;
  let index = 0;

  for (let i = 0; i < N; i++) {
    if (books[i] === N) index = i;
  }

  let findNum = N-1;
  for (let i = index-1; i >= 0; i--) {
    if (books[i] === findNum) {
      length++;
      findNum--;
    }
  }

  return N-length;
}
