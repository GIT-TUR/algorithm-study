const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const relation = input.map((line) => line.split(""));

const graph = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    if (relation[i][j] === "Y") {
      graph[i].push(j);
      graph[j].push(i);
    }
  }
}
const friends = new Array(N).fill(0);

function search(start) {
  const set = new Set();

  graph[start].forEach((friend) => {
    set.add(friend);
    graph[friend].forEach((friendOfFriend) => {
      set.add(friendOfFriend);
    });
  });

  set.delete(start);
  return set.size;
}

for (let i = 0; i < N; i++) {
  const count = search(i);
  friends[i] = count;
}

console.log(Math.max(...friends));
