const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let T, testcase;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  T = Number(input[0]);
  testcase = input.slice(1);
  const result = solution();
  console.log(result.join('\n'));
  process.exit();
});

const solution = () => {
  let result = [];

  for (const test of testcase) {
    result.push(findArea(test));
  }

  return result;
}

const findArea = (testcase) => {
  const test = testcase.split('');
  let current = 'N';
  let height = 0, width = 0;
  let maxHeight = 0, minHeight = 0;
  let maxWidth = 0, minWidth = 0;

  for (const t of test) {
    if (current === 'N') {
      if (t === 'F') {
        maxHeight = Math.max(++height, maxHeight);
      } else if (t === 'B') {
        minHeight = Math.min(--height, minHeight);
      } else if (t === 'L') {
        current = 'W';
      } else if (t === 'R') {
        current = 'E';
      }
    } else if (current === 'S') {
      if (t === 'F') {
        minHeight = Math.min(--height, minHeight);
      } else if (t === 'B') {
        maxHeight = Math.max(++height, maxHeight);
      } else if (t === 'L') {
        current = 'E';
      } else if (t === 'R') {
        current = 'W';
      }
    } else if (current === 'E') {
      if (t === 'F') {
        maxWidth = Math.max(++width, maxWidth);
      } else if (t === 'B') {
        minWidth = Math.min(--width, minWidth);
      } else if (t === 'L') {
        current = 'N';
      } else if (t === 'R') {
        current = 'S';
      }
    } else if (current === 'W') {
      if (t === 'F') {
        minWidth = Math.min(--width, minWidth);
      } else if (t === 'B') {
        maxWidth = Math.max(++width, maxWidth);
      } else if (t === 'L') {
        current = 'S';
      } else if (t === 'R') {
        current = 'N';
      }
    }
  }

  return (maxHeight-minHeight)*(maxWidth-minWidth);
}