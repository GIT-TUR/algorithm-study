const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const S = Number(input);
const MAX_SIZE = 2000;

const visited = Array.from({ length: MAX_SIZE + 1 }, () =>
  new Array(MAX_SIZE + 1).fill(false)
);

const q = [];
q.push([1, 0, 0]);
visited[1][0] = true;

while (q.length) {
  const [screen, clipboard, time] = q.shift();

  if (screen === S) {
    console.log(time);
    break;
  }

  if (visited[screen][screen] === false) {
    visited[screen][screen] = true;
    q.push([screen, screen, time + 1]);
  }

  if (
    clipboard > 0 &&
    screen + clipboard <= MAX_SIZE &&
    visited[screen + clipboard][clipboard] === false
  ) {
    visited[screen + clipboard][clipboard] = true;
    q.push([screen + clipboard, clipboard, time + 1]);
  }

  if (screen > 1 && visited[screen - 1][clipboard] === false) {
    visited[screen - 1][clipboard] = true;
    q.push([screen - 1, clipboard, time + 1]);
  }
}
