class Solution {
public:
    bool visited[1005]; 
    void dfs(vector<vector<int>>& rooms, int now){
        visited[now] = true; 
        for(int i=0; i<rooms[now].size(); i++){
            int next = rooms[now][i];
            if(!visited[next]){
                dfs(rooms, next);
            }
        }
    }
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        dfs(rooms, 0);
        for(int i=0; i<rooms.size(); i++){
            if(!visited[i]) return false; 
        }
        return true; 
    }
};