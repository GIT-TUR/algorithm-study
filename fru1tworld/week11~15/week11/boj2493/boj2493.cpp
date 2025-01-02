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
#define MAXN 200005
ll MOD = 1000000007;
ll MOD2 = 998244353;
int INF = 0x3f3f3f3f;

pii arr[500005];
stack<pii> s;
void solve(){
    int i,j,k;
    int n; cin >> n;
    for(i=1; i<=n; i++){
        cin >> arr[i].first;
        arr[i].second = i;
    }
    s.push({arr[1].first, arr[1].second}); cout << "0 ";

    for(i=2; i<=n; i++){
        if(s.empty()){
            cout << "0 ";
            s.push({arr[i].first, arr[i].second});
            continue;
        }

        if(s.top().first >= arr[i].first){
            cout << s.top().second << ' ';
        }else{
            while(!s.empty()){
                if(s.top().first >= arr[i].first) break;
                s.pop();
            }
            if(s.empty()){
                cout << "0 ";
            }else{
               cout << s.top().second << ' ';
            }
        }
        s.push({arr[i].first, arr[i].second});
    }
}

int main(){
    FASTIO
    solve();
}