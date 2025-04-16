#include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <algorithm>
#include <string>
#include <stack>

using namespace std;

typedef long long ll;
int n,m, ans;
int a[55][55];
int cmp[55][55];
int oper[10][3];

int cal() {
    int res = 0x3f3f3f3f;
    for(int i=0; i<n; i++) {
        int sum = 0;
        for(int j=0; j<m; j++) {
            sum += cmp[i][j];
        }
        res = min(res, sum);
    }
    return res;
}
void turn(int r, int c, int s) {
    r--;
    c--;

    for (int layer = 1; layer <= s; layer++) {
        int top = r - layer;
        int bottom = r + layer;
        int left = c - layer;
        int right = c + layer;

        int temp = cmp[top][left];

        for (int i = top; i < bottom; i++) {
            cmp[i][left] = cmp[i + 1][left];
        }

        for (int i = left; i < right; i++) {
            cmp[bottom][i] = cmp[bottom][i + 1];
        }

        for (int i = bottom; i > top; i--) {
            cmp[i][right] = cmp[i - 1][right];
        }

        for (int i = right; i > left; i--) {
            cmp[top][i] = cmp[top][i - 1];
        }

        cmp[top][left + 1] = temp;
    }
}
void copy() {
    for(int i=0; i<n; i++) {
        for(int j=0; j<m; j++) {
            cmp[i][j] = a[i][j];
        }
    }
}

int go(vector<int> &node) {
    copy();
    for(int i=0; i<node.size(); i++) {
        int idx = node[i];
        int r = oper[idx][0];
        int c = oper[idx][1];
        int s = oper[idx][2];
        turn(r,c,s);
    }
    return cal();
}
void dfs(int now, int mx, vector<int> &node, vector<bool> &visited) {
    if (node.size() == mx) {
        ans = min(ans, go(node));
        return;
    }
    for (int i = 0; i < mx; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        node.push_back(i);
        dfs(now + 1, mx, node, visited);
        node.pop_back();
        visited[i] = false;
    }
}

void solve() {
    int i,j,k;
    cin >> n >> m >> k;
    for(i=0; i<n; i++) {
        for(j=0; j<m; j++) {
            cin >> a[i][j];
        }
    }
    for(i=0; i<k; i++) {
        for(j=0; j<3; j++) {
            cin >> oper[i][j];
        }
    }
    ans = 0x3f3f3f3f;
    vector<int> temp;
    vector<bool> visited(k, false);
    dfs(0, k, temp, visited);
    cout << ans;
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}
