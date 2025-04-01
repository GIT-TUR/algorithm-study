let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const k = Number(input.shift());
const signArr = input.shift().split(" ");
const answer = [];
const visited = new Array(10).fill(false);

function makeNum(str, cnt) {
  if (cnt === k) {
    answer.push(str);
    return;
  }

  const last = str[cnt];
  if (signArr[cnt] === ">") {
    for (let i = 0; i < 10; i++) {
      if (!visited[i] && last > i) {
        visited[i] = true;
        makeNum(str + `${i}`, cnt + 1);
        visited[i] = false;
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (!visited[i] && last < i) {
        visited[i] = true;
        makeNum(str + `${i}`, cnt + 1);
        visited[i] = false;
      }
    }
  }
}

for (let i = 0; i < 10; i++) {
  visited[i] = true;
  makeNum(`${i}`, 0);
  visited[i] = false;
}

console.log(answer.pop() + "\n" + answer.shift());
