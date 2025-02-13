const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, r, c, d;
let arr = [];
let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else if (!r) {
      [r, c, d] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let cnt = 0;
  let y = r;
  let x = c;

  const moveForward = (y, x, d) => {
    let ny = y + dy[d];
    let nx = x + dx[d];
    if (arr[ny][nx] === 0) {
      return [ny, nx];
    }
    return [y, x];
  };

  const moveBackward = (y, x, d) => {
    let ny = y + dy[(d + 2) % 4];
    let nx = x + dx[(d + 2) % 4];
    if (arr[ny][nx] !== 1) {
      return [ny, nx];
    }
    console.log(cnt);
    process.exit();
  };

  while (true) {
    if (arr[y][x] === 0) {
      arr[y][x] = 2;
      cnt++;
    }

    let flag = false; // 청소 안된거 없는 경우
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (arr[ny][nx] === 0) {
        flag = true; // 청소 안된거 있는 경우
        break;
      }
    }

    if (!flag) {
      [y, x] = moveBackward(y, x, d);
    } else {
      d = (d + 3) % 4;
      [y, x] = moveForward(y, x, d);
    }
  }
};
