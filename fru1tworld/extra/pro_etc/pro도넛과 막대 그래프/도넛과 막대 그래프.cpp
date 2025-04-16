#include <string>
#include <vector>
#include <algorithm>
using namespace std;

#define MAX 1000001
int indegree[MAX], outdegree[MAX];
vector<int> adj[MAX];
bool visited[MAX];
void dfs(int now, int &v, int &e){
    visited[now] = true;
    v++;
    for (int next : adj[now]){
        e++;
        if (!visited[next])
            dfs(next, v, e);
    }
}
vector<int> solution(vector<vector<int>> edges) {
    vector<int> answer = { 0, 0, 0, 0 };
    int n = 0, m = edges.size();
    for (int i = 0; i < m; i++){
        int x = edges[i][0], y = edges[i][1];
        indegree[y]++, outdegree[x]++;
        adj[x].push_back(y);
        n = max({ n, x, y });
    }
    int temp = 0, maximum = 0;
    for (int i = 1; i <= n; i++)
        if (!indegree[i] && outdegree[i] > maximum)
            maximum = outdegree[i], temp = i;
    answer[0] = temp;

    for (auto x : adj[answer[0]]) if (!visited[x]) {
        int v = 0, e = 0;
        dfs(x, v, e);
        if (v == e) answer[1]++;
        else if (v - 1 == e) answer[2]++;
        else answer[3]++;
    }
    return answer;
}
