#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
#include <stdlib.h>
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <set>
#include <map>
#include <string>
#include <numeric>
#include <functional>
#include <stack>
#include <math.h>
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

int grid[1005][1005], dp[1005][1005];
bool visited[1005][1005];
int dx[] = {0,0,1,-1};
int dy[] = {1,-1,0,0};
int n,m;

pii init(){
    pii a;
    mem(dp,-1);
    for(int i=0; i<n; i++)
        for(int j=0; j<m; j++){
            cin >> grid[i][j];
            if(grid[i][j] == 2) a.fi = i,a.se = j;
            if(!grid[i][j]) dp[i][j] = 0;
        }


    return a;
}

bool check(int x, int y){
    return x >= 0 && y >= 0 && x < n &&  y < m && !visited[x][y] && grid[x][y];
}

void bfs(int x, int y){
    visited[x][y] = true;
    dp[x][y] = 0;
    queue<pii> q;
    q.push({x,y});
    while(!q.empty()){
        int xx = q.front().fi;
        int yy = q.front().se;
        q.pop();
        for(int i=0; i<4; i++){
            int nx = xx + dx[i];
            int ny = yy + dy[i];
            if(check(nx,ny)){
                visited[nx][ny] = true;
                dp[nx][ny] = dp[xx][yy] + 1;
                q.push({nx, ny});
            }
        }
    }

}
void solve(){
    int i,j,k;
    cin >> n >> m;
    pii start = init();
    bfs(start.fi, start.se);
    for(i=0; i<n; i++){
        for(j=0; j<m; j++){
            cout << dp[i][j] << ' ';
        }
        cout << '\n';
    }
}

int main(){
    FASTIO
    solve();
}