const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let n, L;
let 박스_무게중심;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [n, L] = input[0].split(" ").map(Number);
  박스_무게중심 = input[1].split(" ").map(Number);

  console.log(solution());
  process.exit();
});

const solution = () => {
  let 무게중심_합 = 박스_무게중심[박스_무게중심.length-1];
  let count = 1;
  for (let i = 박스_무게중심.length-1; i >= 0; i--) {
    const 평균_무게중심 = 무게중심_합/count;
    if (박스_무게중심[i]-L >= 평균_무게중심 || 평균_무게중심 >= 박스_무게중심[i]+L) {
      return "unstable";
    }
    무게중심_합 += 박스_무게중심[i];
    count += 1;
  }

  return "stable";
}