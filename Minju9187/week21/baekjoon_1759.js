let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");
const [L, C] = input.shift().split(" ").map(Number);
const alpArr = input.shift().split(" ").sort();
const vowels = ["a", "e", "i", "o", "u"];
const answer = [];

function dfs(string, index) {
  if (string.length === L) {
    const vowelCount = countVowel(string);
    const consonantCount = L - vowelCount;
    if (vowelCount >= 1 && consonantCount >= 2) {
      answer.push(string);
    }
    return;
  } else if (index === C) {
    return;
  }

  dfs(string + alpArr[index], index + 1);
  dfs(string, index + 1);
}

dfs("", 0);

console.log(answer.join("\n"));

function countVowel(string) {
  let count = 0;
  for (const alphabet of string) {
    if (vowels.includes(alphabet)) {
      count++;
    }
  }
  return count;
}
