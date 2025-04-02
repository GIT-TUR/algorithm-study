#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

void solve() {
    int n; 
    cin >> n;
    vector<int> v(n+2, 0);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    
    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (!v[i]) continue;
        if (i + 1 < n) {
            if (i + 2 < n) {
                if (v[i+1] > v[i+2]) {
                    int t = min(v[i], v[i+1] - v[i+2]);
                    ans += t * 5;
                    v[i] -= t;
                    v[i+1] -= t;
                }
                int a = min({v[i], v[i+1], v[i+2]});
                ans += a * 7;
                v[i] -= a;
                v[i+1] -= a;
                v[i+2] -= a;
            }
            int b = min(v[i], v[i+1]);
            ans += b * 5;
            v[i] -= b;
            v[i+1] -= b;
        }
        ans += v[i] * 3;
        v[i] = 0;
    }
    cout << ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    solve();
}
