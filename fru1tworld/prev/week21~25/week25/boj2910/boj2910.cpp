#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
#define all(a) (a).begin(), (a).end()
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();
#define fi first
#define se second
#define sz(a) ((int)(a).size())
#define pb(x) push_back(x)
#define mem(a, b) memset(a, (b), sizeof(a))

map<int, int> mp;
void solve(){
    int i,j,k;
    int n,c; cin >> n >> c;
    vector<int> v(n);
    for(i=0; i<n; i++) cin >> v[i], mp[v[i]]++;
    for(i=0; i<n; i++){
        int mx = 0;
        int num = -1;
        int idx = -1;
        for(j=0; j<n; j++){
            if(mx < mp[v[j]]){
                mx = mp[v[j]];
                num = v[j];
                idx = j;
            }
        }
        while(mp[v[idx]]--){
            cout << num << ' ';
        }
        if(num == -1) break;
    }

}
int main(){
    FASTIO
    solve();
}


