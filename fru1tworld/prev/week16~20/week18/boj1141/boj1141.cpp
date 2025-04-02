#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

void solve() {
    int i,j,k;
    int n; cin >> n;

    vector<string> v(n);
    vector<bool> check(n, true);

    for (i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end());

    for (i=0; i < v.size(); i++){
        for (j = i + 1; j < v.size(); j++)
            if (v[j].substr(0, v[i].size()) == v[i]) {
                check[i] = false;
                break;
            }
    }

    int ans = 0;
    for (auto x : check) if(x)ans++;

    cout << ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
    return 0;
}
