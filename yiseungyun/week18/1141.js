const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, words;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  words = input.slice(1);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  const dict = {};
  words.sort((a, b) => a.length > b.length ? 1 : -1);

  for (const word of words) {
    if (!dict[word]) {
      dict[word] = 1;
    } else {
      dict[word] += 1;
    }
  }

  for (let i = 0; i < N-1; i++) {
    const current = words[i];
    for (let j = i+1; j < N; j++) {
      if (current === words[j].substr(0, current.length)) {
        dict[current] -= 1;
        if (dict[current] === 0) delete dict[current];
        break;
      }
    }
  }

  return Object.keys(dict).length;
}
