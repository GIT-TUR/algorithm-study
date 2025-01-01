/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  let DP = Array.from({ length: obstacleGrid.length }, () => new Array(obstacleGrid[0].length).fill(0));
  for (let col = 0; col < obstacleGrid[0].length; col++) {
      if (obstacleGrid[0][col] === 1) DP[0][col] = 0;
      else DP[0][col] = col-1 >= 0 ? DP[0][col-1] : 1;
  }

  for (let row = 1; row < obstacleGrid.length; row++) {
      for (let col = 0; col < obstacleGrid[0].length; col++) {
          if (obstacleGrid[row][col] === 1) {
              DP[row][col] = 0;
          } else {
              const previousRow = row-1 >= 0 ? DP[row-1][col] : 0;
              const previousCol = col-1 >= 0 ? DP[row][col-1] : 0;
              DP[row][col] = previousRow+previousCol;
          }
      }
  }

  return DP[obstacleGrid.length-1][obstacleGrid[0].length-1];
};