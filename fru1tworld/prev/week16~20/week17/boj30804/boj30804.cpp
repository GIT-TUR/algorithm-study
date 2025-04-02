#include<iostream>
#include<map>
#include<math.h>
#include<vector>
using namespace std;
typedef long long ll;

map<int, int> mp;
int check() {
    int cnt = 0;
    for(auto x : mp) {
        if(x.second > 0) cnt++;
    }
    return cnt;
}
void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<int> v(n);
    for(auto &x : v) cin >> x;
    int l=0,r=0;
    int ans = 0;
    while(r < n) {
        mp[v[r++]]++;
        if(check() <= 2) ans = max(ans, r-l);
        else mp[v[l++]]--;
    }
    cout << ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}

