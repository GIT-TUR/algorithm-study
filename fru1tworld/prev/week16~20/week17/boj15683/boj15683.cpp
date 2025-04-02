#include <bits/stdc++.h>

#define MOD 1000000007
#define MAX 0x3f3f3f3f
#define MAX2 0x3f3f3f3f3f3f3f3fll
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();
#define fi first
#define se second
#define all(a) (a).begin(), (a).end()
#define sz(a) ((int)(a).size())
#define pb(x) push_back(x)
#define pbk() pop_back()
#define mem(a, b) memset(a, (b), sizeof(a))
#define FOR int i,j,k;
#define NONTEST int main(){FASTIO solve();}
#define ISTEST int main(){FASTIO int tt; cin >> tt; while(tt--) solve();}

using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
typedef tuple<int, int, int> tiii;

int grid[10][10];
int temp[10][10];
int r,c,ans;
vector<pii> v;
vector<int> turn;

int cctv[5][5][5] = {
        {
        {0,0,1,0},
        {0,0,0,1},
        {1,0,0,0},
        {0,1,0,0}
        },
        {
        {1,0,1,0},
        {0,1,0,1},
        {1,0,1,0},
        {0,1,0,1}
        },{
        {1,0,0,1},
        {1,1,0,0},
        {0,1,1,0},
        {0,0,1,1}
        },{
        {1,1,0,1},
        {1,1,1,0},
        {0,1,1,1},
        {1,0,1,1}
        },{
        {1,1,1,1},
        {1,1,1,1},
        {1,1,1,1},
        {1,1,1,1},
        }
};
void op(int x, int y, int op){
    if(op == 0){
        for(int i=x; i>=0; i--){
            if(temp[i][y] == 6) break;
            temp[i][y] = 9;
        }
    }
    if(op == 2){
        for(int i=x; i<r; i++){
            if(temp[i][y] == 6) break;
            temp[i][y] = 9;
        }
    }
    if(op == 1){
        for(int i=y; i>=0; i--){
            if(temp[x][i] == 6) break;
            temp[x][i] = 9;
        }
    }
    if(op == 3){
        for(int i=y; i<c; i++){
            if(temp[x][i] == 6) break;
            temp[x][i] = 9;
        }
    }
}
void go(int level){
    FOR
    if(level == sz(v)){
        for(i=0; i<r; i++){
            for(j=0; j<c; j++){
                temp[i][j] = grid[i][j];
            }
        }

        for(i=0; i<sz(v); i++){
            int xx = v[i].fi;
            int yy = v[i].se;
            int cctv_num = grid[xx][yy]-1;
            int turn_cnt = turn[i];
            for(j=0; j<4; j++){
                if(cctv[cctv_num][turn_cnt][j]) op(xx,yy,j);
            }
        }
        int cnt = 0;
        for(i=0; i<r; i++){
            for(j=0; j<c; j++){
                if(!temp[i][j]) cnt++;
            }
        }
        ans = min(ans, cnt);
        return;
    }

    for(i=0; i<4; i++){
        turn.pb(i);
        go(level+1);
        turn.pbk();
    }
}
void solve(){
    FOR
    cin >> r >> c;
    ans = MAX;
    for(i=0; i<r; i++){
        for(j=0; j<c; j++){
            cin >> grid[i][j];
            if(grid[i][j] > 0 && grid[i][j] < 6){
                v.push_back({i,j});
            }
        }
    }
    go(0);
    cout << ans;
}

NONTEST