#include <iostream>
#include <vector>
#include <stack>
using namespace std;

typedef long long ll;
typedef pair<int, int> pii;

int n,s,m;
vector<int> v;
int go(int t) {
    int ret = 0;
    for(int i=0; i<m; i++) {
        int a = v[i];
        ret += t/a + 1;
    }
    return ret;
}
void solve() {
    cin >> n >> s >> m;

    for(int i=0; i<m; i++) {
        int a; cin >> a;
        v.push_back(a);
    }
    int l = 0, h = n-s;
    int mid;
    int res = 0;
    while(l<=h) {
        mid = (l+h)/2;
        if(go(mid) >= n-s) {
            res = mid;
            h = mid - 1;
        }else {
            l = mid + 1;
        }
    }

    int ans = 0;
    int soboru;
    if(res == 0) soboru = 0;
    else soboru = go(res - 1);

    for(int i=1; i<=m; i++) {
        if(res%v[i-1] == 0 && soboru < n-s) {
            ans = i;
            soboru++;
        }
    }
    cout << ans;
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}