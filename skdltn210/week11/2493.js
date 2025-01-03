const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let tower = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      tower = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let stack = [];
  let answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const h = tower[i];

    while (stack.length > 0 && stack[stack.length - 1][0] < h) {
      stack.pop();
    }
    if (stack.length > 0) {
      answer[i] = stack[stack.length - 1][1] + 1;
    }
    stack.push([h, i]);
  }

  console.log(answer.join(" "));
};
