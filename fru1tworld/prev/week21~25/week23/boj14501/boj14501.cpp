#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();


ll MOD = 1000000007;
ll MOD2 = 998244353;
int INF = 0x3f3f3f3f;


pii arr[16];
int dp[16];
void solve(){
    int i,j,k;
    int n; cin >> n;
    for(i=0; i<n; i++){
        cin >> arr[i].first >> arr[i].second;
    }

    int ans = 0;
    for(i=0; i<n; i++){
        int day = arr[i].first + i + 1;
        int cost = arr[i].second;
        int d = arr[i].first;
        if(day <= n+1){
            int mx  = 0;
            for(j=0; j<=day; j++){
                mx = max(mx , dp[j]);
                dp[j] = mx;
            }

            dp[day] = max(mx, dp[day-d] + cost);
            if(ans < dp[day]) ans = dp[day];
         }
    }
    cout << ans;

}
int main(){
    FASTIO
    solve();
}