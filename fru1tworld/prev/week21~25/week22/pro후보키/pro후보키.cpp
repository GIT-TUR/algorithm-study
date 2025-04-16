#include <string>
#include <vector>
#include <set>
using namespace std;

bool is_candidate(const vector<vector<string>> &relation, const vector<bool> &visited) {
    int numColumns = relation[0].size();
    vector<int> cols;
    for (int j = 0; j < numColumns; j++){
        if(visited[j]) cols.push_back(j);
    }
    if(cols.empty()) return false;
    
    set<string> keys;
    for (const auto &row : relation) {
        string key;
        for (int col : cols) {
            key += row[col] + ",";
        }
        keys.insert(key);
    }
    if(keys.size() != relation.size()) return false;
    
    for (int i = 0; i < cols.size(); i++) {
        set<string> subKeys;
        for (const auto &row : relation) {
            string key;
            for (int j = 0; j < cols.size(); j++) {
                if(i == j) continue;
                key += row[cols[j]] + ",";
            }
            subKeys.insert(key);
        }
        if(subKeys.size() == relation.size())
            return false;
    }
    return true;
}

int dfs(const vector<vector<string>> &relation, int start, vector<bool> &visited) {
    int numColumns = relation[0].size();
    int count = 0;
    bool anySelected = false;
    for (int i = 0; i < numColumns; i++){
        if(visited[i]) { anySelected = true; break; }
    }
    if(anySelected && is_candidate(relation, visited)) {
        return 1;
    }
    
    for (int i = start; i < numColumns; i++){
        if(visited[i]) continue;
        visited[i] = true;
        count += dfs(relation, i + 1, visited);
        visited[i] = false;
    }
    return count;
}

int solution(vector<vector<string>> relation) {
    int numColumns = relation[0].size();
    vector<bool> visited(numColumns, false);
    return dfs(relation, 0, visited);
}
