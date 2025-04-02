#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int i,j,k;
    int w,n;
    cin >> w >> n;
    vector<pair<int,int>> v(n);
    for(auto &x : v) {
        cin >> x.first >> x.second;
    }
    int ans = 0;
    pair<int, int> temp  = {0, 0};
    for(i=0; i<n; i++) {
        temp.first = v[i].first;
        if(temp.second + v[i].second > w) {
            ans += temp.first * 2;
            temp.second = 0;
            i--;
        }else if(temp.second + v[i].second == w){
            ans += temp.first * 2;
            temp.second = 0;
        }else {
            temp.second += v[i].second;
        }
    }

    cout << ans << '\n';
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int tt; cin >> tt;
    while(tt--) {
        solve();
    }
    return 0;
}
