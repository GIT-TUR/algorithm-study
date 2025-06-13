const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M;
let command = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(" ").map(Number);
  for (let i = 1; i <= M; i++) {
    command.push(input[i]);
  }
  console.log(solution());
  process.exit();
});

const solution = () => {
  let train = new Array(N).fill(0);
  for (let 명령 of command) {
    let [번호, ...기차] = 명령.split(" ").map(Number);
    if (번호 === 1) {
      train[기차[0]-1] |= 2**(20-기차[1]);
    } else if (번호 === 2) {
      train[기차[0]-1] &= ~(2**(20-기차[1]));
    } else if (번호 === 3) {
      train[기차[0]-1] >>= 1;
    } else {
      train[기차[0]-1] = (train[기차[0]-1] << 1) & ((1 << 20) - 1);
    }
  }

  const 중복_확인 = {};
  
  for (const 기차 of train) {
    if (!중복_확인[기차]) {
      중복_확인[기차] = true;
    }
  }

  return Object.keys(중복_확인).length;
}