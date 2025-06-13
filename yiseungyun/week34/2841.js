const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, P;
let array = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, P] = input[0].split(" ").map(Number);
  for (let i = 1; i < N+1; i++) {
    array.push(input[i].split(" ").map(Number));
  }

  console.log(solution());
  process.exit();
});

const solution = () => {
  let result = 0;
  const stack = {};
  for (const [line, number] of array) {
    if (stack[line]) {
      let tempStack = stack[line];
      while (tempStack[tempStack.length-1] > number) {
        tempStack.pop();
        result += 1;
      }
      if (tempStack[tempStack.length-1] !== number) {
        tempStack.push(number);
        result += 1;
      }
    } else {
      stack[line] = [number];
      result += 1;
    }
  }

  return result;
}