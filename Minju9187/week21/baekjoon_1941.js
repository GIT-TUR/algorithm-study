let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((v) => v.trim().split(""));
let answer = 0;
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function checkConnected(selected) {
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));

  for (let [x, y] of selected) {
    visited[x][y] = true;
  }
  let pass = 0;
  const [x, y] = selected[0];
  visited[x][y] = false;
  const stack = [[x, y]];

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (checkOutLine(nx, ny) && visited[nx][ny]) {
        stack.push([nx, ny]);
        visited[nx][ny] = false;
      }
    }
    pass++;
  }
  if (pass === 7) return true;
  return false;
}

function select7Girls(selected, number, index) {
  const len = selected.length;
  if (len - number > 3) {
    return;
  }

  if (len === 7) {
    if (checkConnected(selected)) {
      answer++;
      return;
    }
  }

  for (let i = index; i < 25; i++) {
    let x = Math.floor(i / 5);
    let y = i % 5;
    select7Girls(
      [...selected, [x, y]],
      number + (arr[x][y] === "S" ? 1 : 0),
      i + 1
    );
  }
}

function checkOutLine(x, y) {
  if (x < 0 || y < 0 || x >= 5 || y >= 5) {
    return false;
  }
  return true;
}

select7Girls([], 0, 0);
console.log(answer);

// const fs = require("fs");

// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs
//   .readFileSync(filePath, "utf8")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((item) => item.split(""));

// const isAdjust = (arr) => {
//   const [dx, dy] = [
//     [1, -1, 0, 0],
//     [0, 0, 1, -1],
//   ];

//   let visited = new Array(7).fill(false);
//   let count = 0;

//   const queue = [];
//   queue.push(arr[count]);
//   visited[count] = true;
//   count += 1;

//   while (queue.length) {
//     const s_idx = queue.shift();
//     const p_x = s_idx % 5;
//     const p_y = Math.floor(s_idx / 5);

//     for (let i = 0; i < 4; i++) {
//       const nx = p_x + dx[i];
//       const ny = p_y + dy[i];
//       if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
//       for (let j = 0; j < 7; j++) {
//         if (visited[j]) continue;

//         if (Math.floor(arr[j] / 5) === ny && arr[j] % 5 === nx) {
//           queue.push(arr[j]);
//           visited[j] = true;
//           count += 1;
//         }
//       }
//     }
//   }

//   if (count === 7) return true;
//   return false;
// };

// const solution = (input) => {
//   let answer = 0;

//   // 1. 7개의 위치 뽑기
//   const select = [];
//   const pick = (idx, selectedIdx) => {
//     if (selectedIdx === 7) {
//       // 2. 인접한지 확인
//       // 3. S가 4개 이상인지 확인
//       if (isAdjust(select) && checkCount(input, select)) answer += 1;
//       return;
//     }

//     if (idx === 25) return;

//     select[selectedIdx] = idx;
//     pick(idx + 1, selectedIdx + 1);
//     pick(idx + 1, selectedIdx);
//   };

//   pick(0, 0);

//   return answer;
// };

// const checkCount = (input, arr) => {
//   let s_cnt = 0;

//   arr.forEach((idx) => {
//     const p_x = idx % 5;
//     const p_y = Math.floor(idx / 5);

//     if (input[p_y][p_x] === "S") s_cnt += 1;
//   });

//   return s_cnt >= 4;
// };

// const answer = solution(input);
// console.log(answer);
