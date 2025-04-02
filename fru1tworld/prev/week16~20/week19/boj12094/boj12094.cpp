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

int grid[25][25];
int temp[25][25];
int ans, n;
queue<int> q;

void up(){
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(temp[j][i]) q.push(temp[j][i]); temp[j][i] = 0;
            }
            int idx = 0;
            while(!q.empty()){
                int num = q.front(); q.pop();
                if(!temp[idx][i]){ temp[idx][i] = num;
                }else{
                    if(temp[idx][i] == num) temp[idx++][i] += num;
                    else temp[++idx][i] = num;
                }
            }
        }
}

void down(){
    for(int i=0; i<n; i++){
        for(int j=n-1; j>=0; j--){
            if(temp[j][i]) q.push(temp[j][i]);
            temp[j][i] = 0;
        }
        int idx = n-1;
        while(!q.empty()){
            int num = q.front();
            q.pop();
            if(!temp[idx][i]) temp[idx][i] = num;
            else{
                if(temp[idx][i] == num) temp[idx--][i] += num;
                else temp[--idx][i] = num;
            }
        }
    }
}

void left(){
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(temp[i][j]) q.push(temp[i][j]);
            temp[i][j] = 0;
        }

        int idx = 0;
        while(!q.empty()){
            int num = q.front();
            q.pop();
            if(!temp[i][idx])
                temp[i][idx] = num;
            else{
                if(temp[i][idx] == num) temp[i][idx++] += num;
                else temp[i][++idx] = num;
            }
        }
    }
}

void right(){
    for(int i=0; i<n; i++){
        for(int j=n-1; j>=0; j--){
            if(temp[i][j]) q.push(temp[i][j]);
            temp[i][j] = 0;
        }
        int idx = n-1;
        while(!q.empty()){
            int num = q.front();
            q.pop();
            if(!temp[i][idx]) temp[i][idx] = num;
            else{
                if(temp[i][idx] == num) temp[i][idx--] += num;
                else temp[i][--idx] = num;
            }
        }
    }
}

void turn(int x){
    if(x == 0) up(); if(x == 1) down(); if(x == 2) left(); if(x == 3) right();
}

int get(){
    int num = 0;
    for(int i=0; i<n; i++) for(int j=0; j<n; j++) num = max(num, temp[i][j]);
    return num;
}

void go(int depth){
    if(depth == 10) ans = max(ans, get());
    if(get() * (1<<(10 - depth)) <= ans) return;
    int now[25][25];
    memcpy(now, temp, sizeof(temp));
    for(int t=0; t<4; t++){
        turn(t);
        bool plag = false;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(now[i][j] != temp[i][j]){
                    plag = true;
                    break;
                }
            }
        }
        if(plag) go(depth+1);
        memcpy(temp, now, sizeof(temp));
    }
}
void input(){
    cin >> n; for(int i=0; i<n; i++) for(int j=0; j<n; j++) cin >> grid[i][j];
    memcpy(temp,grid,sizeof(grid));
}
void solve(){
    int i,j,k;
    input();
    ans = max(ans, get());
    go(0);
    cout << ans;
}
int main(){
    FASTIO
    solve();

}