const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      arr = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let map = new Map();
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < arr.length) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) === 0) {
        map.delete(arr[left]);
      }
      left++;
    }

    let currentLength = right - left + 1;
    max = Math.max(max, currentLength);

    right++;
  }

  console.log(max);
};
