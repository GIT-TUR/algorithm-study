const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input[0]);
  const towers = input[1].split(" ").map(Number);
  const result = solution(N, towers);
  console.log(result.join(" "));
  process.exit();
});

const solution = (N, towers) => {
  let stack = [[0, towers[0]]];
  let result = Array.from({ length: N }, () => 0);

  for (let i = 1; i < N; i++) {
    while (stack.length > 0 && stack[stack.length-1][1] < towers[i]) {
      stack.pop();
    }

    if (stack.length !== 0) {
      result[i] = stack[stack.length-1][0]+1;
    }

    stack.push([i, towers[i]]);
  }

  return result;
}