#include <iostream>
#include <vector>
#include <stack>
using namespace std;

typedef long long ll;
typedef pair<int, int> pii;

void solve() {
    int i,j,k;
    int n; cin >> n >> k;
    vector<int> v(n);
    for(auto &x : v) cin >> x;

    int ans = 0;
    int day = 0;
    for(i=0; i<n; i++) {
        ans += v[i] - v[0];
        if(!day && v[i] > v[0]) {
            day = n - i;
        }
    }
    cout << ans << ' ' << day;
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}