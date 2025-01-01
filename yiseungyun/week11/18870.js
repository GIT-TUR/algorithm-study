const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join(" "));
  process.exit();
});

const solution = (input) => {
  const N = Number(input[0]);
  let array = input[1].split(" ").map(Number);
  let copyArray = Array.from(new Set(array));
  const numberDict = {};

  copyArray.sort((a, b) => a - b);
  for (let i = 0; i < copyArray.length; i++) {
    numberDict[copyArray[i]] = i;
  }

  array = array.map(number => numberDict[number]);

  return array;
}