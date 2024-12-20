let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("2.txt").toString().trim();

const numArr = input.split("");

let cnt = 0;
let idx = 0;

while (true) {
  cnt++;
  const cntStr = cnt.toString();
  for (let i = 0; i < cntStr.length; i++) {
    if (cntStr[i] === numArr[idx]) idx++;
  }
  if (idx === numArr.length) break;
}

console.log(cnt);
