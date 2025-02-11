#include<iostream>
#include<map>
#include<math.h>
#include<vector>
#include <climits>
using namespace std;
typedef long long ll;

void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<ll> v(n);
    for(auto &x : v ) cin >> x;
    sort(v.begin(),v.end());
    ll ans = LLONG_MAX;
    int idxI, idxJ, idxK;
    for(i=0; i<n-1; i++) {
        for(j=i+1; j<n-1; j++) {
            int l=j+1;
            int r=n-1;
            ll sum = v[i] + v[j];
            while(l <= r) {
                int mid = (l + r) / 2;
                ll res = sum + v[mid];

                if(abs(res) < ans) {
                    ans = abs(res);
                    idxI = i;
                    idxJ = j;
                    idxK = mid;
                }

                if(res < 0) l = mid + 1;
                else r = mid - 1;
            }

        }
    }
    cout << v[idxI] << ' ' <<  v[idxJ] << ' ' << v[idxK];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}

