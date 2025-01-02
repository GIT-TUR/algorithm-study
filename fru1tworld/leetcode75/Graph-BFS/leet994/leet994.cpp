class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int dir[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        int m = grid.size();
        int n = grid[0].size();

        queue<pair<pair<int, int>, int>> q; // {coordinates, time}
        int cntFresh = 0; 

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    q.push({{i, j}, 0}); 
                }
                if (grid[i][j] == 1) {
                    cntFresh++;
                }
            }
        }

        int time = 0; 

        // Perform BFS
        while (!q.empty()) {
            auto front = q.front();
            int x = front.first.first;
            int y = front.first.second;
            int currTime = front.second;
            q.pop();

            for (auto it : dir) {
                int newX = x + it[0];
                int newY = y + it[1];

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] == 1) {
                    grid[newX][newY] = 2;
                    q.push({{newX, newY}, currTime + 1});
                    cntFresh--; 
                }
            }

            time = currTime; 
        }

        return cntFresh == 0 ? time : -1;
    }
};