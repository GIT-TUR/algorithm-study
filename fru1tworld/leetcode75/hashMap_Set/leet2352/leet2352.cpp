class Solution {
public:
    int equalPairs(vector<vector<int>>& grid) {
        int ans = 0;
        int len = grid.size();
        map<string, int> mp; 
        for(int i=0; i<len; i++){
            string temp = "";
            for(int j=0; j<len; j++){
                temp += to_string(grid[i][j]) + ',';
            }
            mp[temp]++;
        }
        for(int i=0; i<len; i++){
            string temp = "";
            for(int j=0; j<len; j++){
                temp += to_string(grid[j][i]) + ',';
            }
            ans += mp[temp];
        }

        return ans; 
    }
};