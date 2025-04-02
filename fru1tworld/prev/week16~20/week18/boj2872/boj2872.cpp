#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<int>v(n);
    for (i = 0; i < n; i++)
        cin >> v[i];

    int cnt = n;
    for (i = n - 1; i >= 0; i--) {
        if (v[i] == cnt)
            cnt--;
    }
    cout << cnt;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
    return 0;
}
