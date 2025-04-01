let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.shift().split("");
let answer = -9999999999;

let num = [];
let oper = [];
//숫자와 계산을 나눔
for (let i = 0; i < N; i++) {
  if (i % 2 === 0) num.push(arr[i]);
  else oper.push(arr[i]);
}

num = num.map((v) => Number(v));

check(0, num[0]);

console.log(answer);

function calc(a, b, oper) {
  if (oper === "+") return a + b;
  else if (oper === "-") return a - b;
  else if (oper === "*") return a * b;
}

//here = 위치, number 현재까지의 계산
function check(here, number) {
  //종료 조건
  if (here === num.length - 1) {
    answer = Math.max(answer, number);
    return;
  }
  //현재 숫자와 뒤에 숫자를 oper로 계산하는 방법
  check(here + 1, calc(number, num[here + 1], oper[here]));
  //뒤에 숫자2개와 oper로 계산 후 현재 숫자와 계산하는 방법
  if (here + 2 <= num.length - 1) {
    let temp = calc(num[here + 1], num[here + 2], oper[here + 1]);
    check(here + 2, calc(number, temp, oper[here]));
  }
}
