#include <iostream>
using namespace std;
typedef long long ll;

void solve() {
    ll n;
    cin >> n;

    ll total_exp = n * (n + 1) / 2;

    ll l = 1, r = 1000000000, ans = 1;
    while (l <= r) {
        ll m = (l + r) / 2;
        ll cmp = m * (m+1);

        if (cmp < total_exp) {
            ans = m+1;
            l = m + 1;
        } else if(cmp > total_exp){
            r = m - 1;
        }else {
            ans = m+1;
            break;
        }
    }

    cout << ans << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int tt;
    cin >> tt;
    while (tt--) {
        solve();
    }

    return 0;
}
