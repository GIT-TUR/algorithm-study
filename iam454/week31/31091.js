const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const people = input[1].split(" ").map(Number);

const more = [];
const less = [];

for (const person of people) {
  if (person > 0) {
    more.push(person);
  } else {
    less.push(person);
  }
}

more.sort((a, b) => a - b);
less.sort((a, b) => a - b);

function search(arr, liars) {
  let l = 0;
  let r = arr.length;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (liars >= arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

const ans = [];

for (let liars = 0; liars <= N; liars++) {
  const liarsFromMore = more.length - search(more, liars);
  const liarsFromLess = less.length - search(less, -1 * liars);

  if (liarsFromMore + liarsFromLess === liars) {
    ans.push(liars);
  }
}

console.log(`${ans.length}\n${ans.join(" ")}`);
