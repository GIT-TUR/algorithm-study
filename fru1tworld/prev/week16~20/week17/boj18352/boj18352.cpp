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

ll MOD = 998244353;

vector<int> edge[300005];
bool visited[300005];
int cnt[300005];

void bfs(int start){
    visited[start] = true;
    queue<int> q;
    q.push(start);
    while(!q.empty()){
        int node = q.front();
        q.pop();
        for(int i=0; i<sz(edge[node]); i++){
            int next = edge[node][i];

            if(!visited[next]){
                visited[next] = true;
                cnt[next] = cnt[node] + 1;
                q.push(next);
            }
        }
    }

}
void solve(){
    int i,j,k;
    int n,m,x;
    cin >> n >> m >> k >> x;
    bool ok = false;
    for(i=0; i<m; i++){
        int u,v;
        cin >> u >> v;
        edge[u].pb(v);
    }
    bfs(x);
    for(i=1; i<=n; i++){
        if(cnt[i] == k) cout << i << '\n', ok = true;
    }

    if(!ok) cout << -1;
}
int main(){
    FASTIO
    solve();
}


