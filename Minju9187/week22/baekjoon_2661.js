let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim();

const N = Number(input);

const numArr = ["1", "2", "3"];
let flag = false;

function dfs(str) {
  if (flag) {
    return;
  }

  if (!checkGoodSeq(str)) {
    return;
  }

  if (str.length === N) {
    console.log(str);
    flag = true;
    return;
  }

  for (let i = 0; i < 3; i++) {
    dfs(str + numArr[i]);
  }
}

function checkGoodSeq(str) {
  const len = str.length;
  const searchRange = parseInt(len / 2, 10);
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  for (let i = 1; i <= searchRange; i++) {
    if (str.slice(len - i, len) === str.slice(len - 2 * i, len - i))
      return false;
  }
  return true;
}

dfs("");
