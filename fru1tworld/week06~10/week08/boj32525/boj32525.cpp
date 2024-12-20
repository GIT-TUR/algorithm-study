#include <iostream>
#include <vector>
#include <set>
#include <string>

using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
#define FASTIO   cin.tie(0), cout.tie(0), ios_base::sync_with_stdio(false);
void solve() {
    int n; cin >> n;
    for(int i=0; i<n; i++) {
        int x,y; cin >> x >> y;
        cout << i+1 << ' ' << x+1 << ' ' << y+100000001 << '\n';
    }
}
int main() {
    FASTIO
    int tt; cin >> tt;
    while(tt--) {
        solve();
    }
}

//