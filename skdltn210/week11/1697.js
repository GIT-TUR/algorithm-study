const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let visited = Array(100001).fill(0);

readline
  .on("line", (line) => {
    [n, k] = line.split(" ").map((el) => parseInt(el));
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const bfs = (start) => {
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    if (current === k) {
      console.log(count);
      return;
    }

    const nextPositions = [current + 1, current - 1, current * 2];

    for (const next of nextPositions) {
      if (next >= 0 && next < 100001 && !visited[next]) {
        visited[next] = 1;
        queue.push([next, count + 1]);
      }
    }
  }
};

const solution = () => {
  visited[n] = 1;
  bfs(n);
};
