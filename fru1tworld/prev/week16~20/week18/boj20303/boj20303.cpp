#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


int n, m, k;
int candy[30005];
int parent[30005];
int allCandy[30005];
int dp[30005][3005];
vector<int> v[30005];
int find(int x) {
    if (parent[x] == x)
        return x;
    return parent[x] = find(parent[x]);
}

void unionSet(int x, int y) {
    int px = find(x);
    int py = find(y);
    if (px <= py) {
        parent[py] = px;
    } else {
        parent[px] = py;
    }
}



void solve() {
    int i,j,k;
    cin >> n >> m >> k;
    for (i=1; i < 30005; ++i) {
        parent[i] = i;
    }
    for (i=1; i <= n; ++i) {
        cin >> candy[i];
    }
    for (i=0; i < m; ++i) {
        int u, v;
        cin >> u >> v;
        unionSet(u, v);
    }

    int ans = 0;
    vector<int> reps;
    for (int i = 1; i <= n; ++i) {
        int rep = find(i);
        v[rep].push_back(i);
        reps.push_back(rep);
    }
    sort(reps.begin(), reps.end());
    reps.erase(unique(reps.begin(), reps.end()), reps.end());

    for (int i = 0; i < reps.size(); ++i) {
        int rep = reps[i];
        for (int member : v[rep]) {
            allCandy[i] += candy[member];
        }
    }

    for (int i = 0; i < reps.size(); ++i) {
        int rep = reps[i];
        int groupSize = v[rep].size();
        int groupCandy = allCandy[i];
        for (int j = k - 1; j >= 0; --j) {
            if (j - groupSize >= 0) {
                dp[i + 1][j] = max(dp[i][j], dp[i][j - groupSize] + groupCandy);
            } else {
                dp[i + 1][j] = dp[i][j];
            }
            ans = max(ans, dp[i + 1][j]);
        }
    }
    cout << ans << "\n";

}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    solve();
    return 0;
}
