#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
typedef tuple<int, int, int> tiii;

#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();
#define ARRN  int n; cin >> n; for(i=0; i<n; i++) cin >> arr[i];
#define MAXN 200005
#define fi first
#define se second

ll MOD = 1000000007;
ll MOD2 = 998244353;
int INF = 0x3f3f3f3f;

priority_queue<int,vector<int>,greater<int>> pq;
void solve(){
    int i,j,k;
    int n; cin >> n;
    int x;
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
           cin >> x; pq.push(x);
           if(pq.size() > n) pq.pop();
        }
    }
    cout << pq.top();
}

int main(){
    FASTIO
    solve();
}
//