/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let ans = [];
  let i = 0;
  w1 = word1.split("");
  w2 = word2.split("");
  while (i < w1.length || i < w2.length) {
    if (i < w1.length) ans.push(w1[i]);
    if (i < w2.length) ans.push(w2[i]);
    i++;
  }
  return ans.join("");
};
