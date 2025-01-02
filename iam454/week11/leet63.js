/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        if (i > 0) {
          dp[i][j] += dp[i - 1][j];
        }
        if (j > 0) {
          dp[i][j] += dp[i][j - 1];
        }
      }
    }
  }

  return dp[m - 1][n - 1];
};
