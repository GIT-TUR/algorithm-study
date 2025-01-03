const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let x = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = +line;
    } else {
      x = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  for (let i = 0; i < x.length; i++) {
    x[i] = [i, x[i]];
  }

  x.sort((a, b) => a[1] - b[1]);

  let num = 0;
  for (let i = 0; i < x.length; i++) {
    if (i < x.length - 1 && x[i][1] === x[i + 1][1]) {
      x[i][1] = num;
    } else {
      x[i][1] = num;
      num++;
    }
  }

  x.sort((a, b) => a[0] - b[0]);

  let ans = x.map((item) => item[1]);

  console.log(ans.join(" "));
};
