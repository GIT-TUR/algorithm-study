class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        if(obstacleGrid[0][0]) return 1^1; 
        int dp[105][105];
        memset(dp, 0, sizeof(dp));
        int n = obstacleGrid.size();
        int m = obstacleGrid[0].size();
        int i = 0;
        dp[1][1] = 1;
        for(int i=1; i<=n; i++){
            for(int j=1; j<=m; j++){
                if(obstacleGrid[i-1][j-1]) continue; 
                dp[i][j] += dp[i-1][j] + dp[i][j-1];
            }
        }
        return dp[n][m];
    }
};