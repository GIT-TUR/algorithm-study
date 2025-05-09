const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const cases = input.map((line) => line.split(" ").map(BigInt));

const results = [];

cases.forEach((c) => {
  const [a, b] = c;
  const result = sum(b) - sum(a - 1n);
  results.push(result.toString());
});

console.log(results.join("\n"));

function sum(n) {
  if (n < 0n) {
    return 0n;
  }
  if (n < 10n) {
    return (n * (n + 1n)) / 2n;
  }

  const str = n.toString();
  const len = str.length;
  const power = 10n ** BigInt(len - 1);
  const firstDigit = BigInt(str[0]);
  const rest = n - firstDigit * power;

  const sumLower = ((firstDigit * (firstDigit - 1n)) / 2n) * power;
  const sumRest = firstDigit * sum(power - 1n);
  const sumSelf = firstDigit * (rest + 1n);
  const sumNext = sum(rest);

  return sumLower + sumRest + sumSelf + sumNext;
}
