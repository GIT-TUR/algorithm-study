/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let point = 0;
  let ans = 0;

  for (let p of gain) {
    point += p;
    ans = Math.max(point, ans);
  }

  return ans;
};
