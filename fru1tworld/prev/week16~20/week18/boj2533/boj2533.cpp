#include<iostream>
#include<map>
#include<math.h>
#include<vector>
#include <climits>
using namespace std;
typedef long long ll;

vector<vector<int>> edge;
bool visited[1000000];
bool colored[1000000];
int dfs(int now) {
    visited[now] = true;
    int childCnt = 0;
    int sum = 0;
    int cnt = 0;
    for(auto x : edge[now]) {
        if(visited[x]) continue;
        childCnt++;
        sum += dfs(x);
        if(colored[x]) cnt++;
    }
    if(childCnt && cnt != childCnt){
        sum++;
        colored[now] = true;
    }
    return sum;
}
void solve() {
    int i,j,k;
    int n;
    cin >> n;
    edge.resize(n+1);
    int u, v;
    for(i=0; i<n-1; i++) {
        cin >> u >> v;
        edge[v].push_back(u);
        edge[u].push_back(v);
    }
    cout << dfs(i);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}

