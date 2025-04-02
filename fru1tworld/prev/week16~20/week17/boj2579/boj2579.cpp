#include<iostream>
#include<math.h>
#include<vector>
using namespace std;
typedef long long ll;

void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<int> v(n);
    for(auto &x : v)  cin >> x;

    vector<int> dp(n+2);
    dp[1] = v[0];
    dp[2] = v[0] + v[1];
    dp[3] = max(v[0],v[1]) + v[2];
    for(i=4; i<=n; i++) dp[i] = max(v[i-2] + dp[i-3], dp[i-2])+ v[i-1];
    cout << dp[n];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}

