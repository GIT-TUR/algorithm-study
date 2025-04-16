#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

typedef long long ll;
typedef pair<int, int> pii;

void solve() {
    int i,j,k;
    set<char> ans;
    int n; cin >> n;
    vector<string> v(n);
    for(auto &x : v) cin >> x;
    for(char cmp='A'; cmp <= 'Z'; cmp++) {
        int cnt = 0;
        for(i=0; i<n; i++) {
            if(cmp == v[i][0]) cnt++;
        }
        if(cnt > 1) {
         for(i=0; i<n; i++) ans.insert(max(cmp, v[i][1]));
        }else if(cnt == 1) {
         for(i=0; i<n; i++) {
             if(cmp == v[i][0]) continue;
             ans.insert(max(cmp, v[i][1]));
         }
        }
    }
    cout << ans.size() << '\n';
    for(auto x : ans) {
        cout << x << ' ';
    }
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}