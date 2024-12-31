class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])

        dp = [[0]*n for _ in range(m)]
        if obstacleGrid[0][0] == 0:
            dp[0][0] = 1

        if obstacleGrid[m-1][n-1] == 1:
            return 0
            
        else:
            for i in range(m):
                for j in range(n):
                    if obstacleGrid[i][j] == 0:
                        if i == 0 and j == 0:
                            continue
                        if i == 0 or j == 0:
                            if i == 0:
                                dp[i][j] = dp[i][j-1]
                            else:
                                dp[i][j] = dp[i-1][j]
                        else:
                            dp[i][j] = dp[i-1][j] + dp[i][j-1]
                    else:
                        dp[i][j] = 0

        return dp[m-1][n-1]
        