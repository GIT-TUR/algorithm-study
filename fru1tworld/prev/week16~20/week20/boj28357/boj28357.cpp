#include <iostream>
#include <algorithm>
#include <climits>
#include <vector>
using namespace std;

typedef long long ll;

ll go(ll x, vector<ll> &v) {
    ll cnt = 0;
    for(auto i : v) {
        if(i > x) cnt += i - x;
    }
    return cnt;
}
void solve() {
    ll n,x;
    cin >> n >> x;
    vector<ll> v(n);
    for(auto &i : v) cin >> i;

    ll l=0;
    ll r= 2000'000'000'000LL;

    ll ans = r;
    while(l<=r) {
        ll mid = (l+r)/2LL;
        ll res = go(mid, v);
        if(res > x) {
            l = mid+1;
        }else {
            ans = min(ans,mid);
            r = mid-1;
        }
    }

    cout << ans;
}
int main() {
    solve();
    return 0;
}
