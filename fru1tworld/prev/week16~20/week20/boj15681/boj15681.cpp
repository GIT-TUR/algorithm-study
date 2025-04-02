#include<iostream>
#include<map>
#include<math.h>
#include<vector>
#include <climits>
using namespace std;
typedef long long ll;

vector<vector<int>> edge;
vector<int> dp;
bool visited[100005];
int dfs(int now) {
    visited[now] = true;
    dp[now]++;
    for(auto u : edge[now]) {
        if(visited[u]) continue;
        dp[now] += dfs(u);
    }
    return dp[now];
}
void solve() {
    int i,j,k;
    int n,r,q;
    int u,v;
    cin >> n >> r >> q;

    edge.resize(n+1);
    dp.resize(n+1, 0);

    for(i=0; i<n-1; i++) {
        cin >> u >> v;
        edge[u].push_back(v);
        edge[v].push_back(u);
    }

    dp[r] = dfs(r);
    while(q--) {
        cin >> u;
        cout << dp[u] << '\n';
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}

