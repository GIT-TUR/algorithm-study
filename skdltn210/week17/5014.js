const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let f, s, g, u, d;

readline
  .on("line", (line) => {
    [f, s, g, u, d] = line.split(" ").map(Number);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let visited = Array(f + 1).fill(false);

  const bfs = () => {
    if (s === g) return 0;
    let queue = [[s, 0]];
    visited[s] = true;

    while (queue.length > 0) {
      let [x, cnt] = queue.shift();
      if (x === g) return cnt;
      if (x + u <= f && !visited[x + u]) {
        visited[x + u] = true;
        queue.push([x + u, cnt + 1]);
      }
      if (x - d > 0 && !visited[x - d]) {
        visited[x - d] = true;
        queue.push([x - d, cnt + 1]);
      }
    }
    return "use the stairs";
  };
  console.log(bfs());
};
