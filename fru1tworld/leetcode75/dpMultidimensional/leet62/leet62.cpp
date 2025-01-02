class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> d(m, vector<int>(n, 1));
        for (int col = 1; col < m; ++col) {
            for (int row = 1; row < n; ++row) {
                d[col][row] = d[col - 1][row] + d[col][row - 1];
            }
        }
        return d[m - 1][n - 1];
    }
};