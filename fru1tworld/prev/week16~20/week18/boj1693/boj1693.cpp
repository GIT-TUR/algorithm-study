#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

vector<int> edge[100005];
int dp[100005][25];

int dfs(int now, int prev,int color) {
    if(dp[now][color]) return dp[now][color];

    int sum = 0;
    for (int i = 0; i < edge[now].size(); i++) {
        int node = edge[now][i];
        int mn = 0x3f3f3f3f;
        if (node != prev) {
            for (int next=1; next<20; next++) {
                if (color != next)
                    mn = min(mn, dfs(node, now, next));
            }
            sum += mn;
        }
    }
    return dp[now][color] = sum + color;
}
void solve() {
    int i,j,k;
    int n;
    cin >> n;
    for (i=0; i <n-1; i++) {
        int u, v;
        cin >> u >> v;
        edge[v].push_back(u);
        edge[u].push_back(v);
    }
    int mn = 0x3f3f3f3f;
    for (i=1; i<20; i++) {
       mn = min(mn, dfs(1,0,i));
    }
    cout << mn;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
}
