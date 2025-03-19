const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, K, rain;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M, K] = input[0].split(' ').map(Number);
  rain = input.slice(1).map(i => i.split(' ').map(Number)); 
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => { 
  for (let i = 0; i < M; i++) {
    K -= rain[i][1]; 
    if (K < 0) return `${i+1} 1`; 
  }

  return -1;
}
