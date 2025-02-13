const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;

readline
  .on("line", (line) => {
    [n, k] = line.split(" ").map(Number);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let visited = Array(100001).fill(false);

  const bfs = () => {
    let queue = [];
    let cnt = 0;
    queue.push(n);
    visited[n] = true;
    while (queue.length > 0) {
      if (queue.includes(k)) {
        return cnt;
      }
      cnt++;
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let x = queue.shift();
        if (!visited[x + 1] && x + 1 <= 100000 && x + 1 >= 0) {
          queue.push(x + 1);
          visited[x + 1] = true;
        }
        if (!visited[x - 1] && x - 1 <= 100000 && x - 1 >= 0) {
          queue.push(x - 1);
          visited[x - 1] = true;
        }
        if (!visited[x * 2] && x * 2 <= 100000 && x * 2 >= 0) {
          queue.push(x * 2);
          visited[x * 2] = true;
        }
      }
    }
  };

  console.log(bfs());
};
