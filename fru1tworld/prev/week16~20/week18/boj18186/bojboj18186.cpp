#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

void solve() {
    int n, B, C;
    cin >> n >> B >> C;
    vector<ll> v(n, 0);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }

    ll cost = 0;
    if(C >= B){
        for (int i = 0; i < n; i++) {
            cost += v[i] * B;
        }
        cout << cost;
        return; 
    }

    for (int i = 0; i < n; i++) {
        if(i < n-1) {
            if(i < n-2 && v[i+1] > v[i+2]){
                ll t = min(v[i], v[i+1] - v[i+2]);
                cost += t * (B + C);
                v[i] -= t;
                v[i+1] -= t;
            }
            if(i < n-2) {
                ll a = min({v[i], v[i+1], v[i+2]});
                cost += a * (B + 2 * C);
                v[i] -= a;
                v[i+1] -= a;
                v[i+2] -= a;
            }
            ll b = min(v[i], v[i+1]);
            cost += b * (B + C);
            v[i] -= b;
            v[i+1] -= b;
        }
        cost += v[i] * B;
        v[i] = 0;
    }
    cout << cost;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    solve();
}
