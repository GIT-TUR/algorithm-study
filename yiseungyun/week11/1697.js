const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

readline.on('line', (line) => {
  input = line;
  readline.close();
}).on('close', () => {
  const [N, K] = input.split(" ").map(Number);
  const result = solution(N, K);
  console.log(result);
  process.exit();
});

const solution = (N, K) => {
  let visited = Array.from({ length: 10**5+1 }, () => 0);
  let queue = [[N, 0]];

  while (true) {
    const [current, depth] = queue.shift();
    if (current === K) {
      return depth;
    }
    if (visited[current+1] === 0) {
      queue.push([current+1, depth+1])
      visited[current+1] = 1;
    }
    if (visited[current-1] === 0) {
      queue.push([current-1, depth+1])
      visited[current-1] = 1;
    }
    if (visited[2*current] === 0) {
      queue.push([2*current, depth+1])
      visited[2*current] = 1;
    }
  }
}