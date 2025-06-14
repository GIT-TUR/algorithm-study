const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, P] = input.shift().split(" ").map(Number);
const melodies = input.map((line) => line.split(" ").map(Number));

const stack = Array.from({ length: 7 }, () => []);

let cnt = 0;

for (const [line, fret] of melodies) {
  const curLine = stack[line];

  if (curLine.length === 0 || curLine[curLine.length - 1] < fret) {
    curLine.push(fret);
    cnt += 1;
  } else {
    while (curLine.length && curLine[curLine.length - 1] > fret) {
      curLine.pop();
      cnt += 1;
    }
    if (curLine.length === 0 || curLine[curLine.length - 1] < fret) {
      curLine.push(fret);
      cnt += 1;
    }
  }
}

console.log(cnt);
