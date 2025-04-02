/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];

  function helper(comb, sum, start) {
    if (comb.length === k) {
      if (sum === n) {
        result.push([...comb]);
      }
      return;
    }

    for (let i = start; i < 10; i++) {
      comb.push(i);
      helper(comb, sum + i, i + 1);
      comb.pop();
    }
  }

  helper([], 0, 1);

  return result;
};
