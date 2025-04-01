let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "2.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

const info = arr.map((v) => {
  const [startMonth, startDay, endMonth, endDay] = v;
  return { start: startMonth * 100 + startDay, end: endMonth * 100 + endDay };
});

info.sort((a, b) => {
  if (a.start !== b.start) return a.start - b.start;
  return b.end - a.end;
});

const start = 301;
const end = 1130;
let count = 0;
let current = start;
let idx = 0;

while (current <= end) {
  let maxEnd = current;

  while (idx < N && info[idx].start <= current) {
    if (info[idx].end > maxEnd) {
      maxEnd = info[idx].end;
    }
    idx++;
  }

  if (maxEnd === current) {
    console.log(0);
    return;
  }

  current = maxEnd;
  count++;
}

console.log(count);
