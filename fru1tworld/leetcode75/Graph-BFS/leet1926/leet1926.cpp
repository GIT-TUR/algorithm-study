class Solution {
public:
    struct Cell {
        int r, c;
    };

    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {
        const int rMax = maze.size() - 1;
        const int cMax = maze[0].size() - 1;

        int step = 0;
        queue<Cell> q;
        q.push({entrance[0], entrance[1]});
        maze[entrance[0]][entrance[1]] = '+';
        while (!q.empty()) {
            for (int i = q.size(); i > 0; i--) {
                Cell cell  = q.front();
                q.pop();

                int r = cell.r, c = cell.c;
                if ((r == 0 || r == rMax || c == 0 || c == cMax) && 
                    !(r == entrance[0] && c == entrance[1])) return step;

                if (r > 0 && maze[r - 1][c] == '.') {
                    q.push({r - 1, c});
                    maze[r - 1][c] = '+';
                }
                if (r < rMax && maze[r + 1][c] == '.') {
                    q.push({r + 1, c});
                    maze[r + 1][c] = '+';
                }
                if (c > 0 && maze[r][c - 1] == '.') {
                    q.push({r, c - 1});
                    maze[r][c - 1] = '+';
                }
                if (c < cMax && maze[r][c + 1] == '.') {
                    q.push({r, c + 1});
                    maze[r][c + 1] = '+';
                }
            }
            step++;
        }
        return -1;
    }
};