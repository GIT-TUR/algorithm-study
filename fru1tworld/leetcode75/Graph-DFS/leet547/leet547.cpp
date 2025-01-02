class Solution {
public:
    int len; 
    bool visited[205];
    void dfs(vector<vector<int>> &isConnected, int now){
        visited[now] = true; 
        for(int i=0; i<len; i++){
            int next = isConnected[now][i];
            if(next && !visited[i]){
                dfs(isConnected,i); 
            }
        }
    }
    int findCircleNum(vector<vector<int>>& isConnected) {
        len = isConnected.size();
        int ans = 0; 
        for(int i=0; i<len; i++){
            if(!visited[i]){
                dfs(isConnected, i);
                ans++; 
            }
        }
        return ans; 
    }
};