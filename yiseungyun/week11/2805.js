const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  let trees = input[1].split(" ").map(Number);
  trees.sort((a, b) => a - b);
  
  let left = 0, right = Math.max(...trees);
  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    let sumOfTrees = 0;
    for (const tree of trees) {
      if (tree > mid) {
        sumOfTrees += tree - mid;
      }
    }

    if (sumOfTrees === M) {
      return mid;
    } else if (sumOfTrees > M) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }

  return right;
}