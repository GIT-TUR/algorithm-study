/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  let ans = 1;
  let arrowPosition = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];

    if (start > arrowPosition) {
      ans += 1;
      arrowPosition = end;
    }
  }

  return ans;
};
