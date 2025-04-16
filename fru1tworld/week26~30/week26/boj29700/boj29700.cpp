#include <iostream>
#include <vector>
#include <stack>
using namespace std;

typedef long long ll;
typedef pair<int, int> pii;

void solve() {
    int i,j,k;
    int n,m;
    cin >> n >> m >> k;
    int ans = 0;
    if(m < k) {
        cout << "0";
        return;
    }

    string str;

    while(n--) {
        cin >> str;
        int cnt = 0;
        for(i=0; i<k; i++) cnt += str[i] - '0';
        if(!cnt) ans++;

        for(i=k; i<m; i++) {
            cnt += str[i] - '0';
            cnt -= str[i-k]- '0';
            if(!cnt) ans++;
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