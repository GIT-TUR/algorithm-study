/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let addCandies = candies.map((a) => a + extraCandies);
  let max = Math.max(...candies);
  let ans = [];
  for (let candy of addCandies) {
    if (candy >= max) ans.push(true);
    else ans.push(false);
  }
  return ans;
};
