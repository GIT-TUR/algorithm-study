#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
#include <stdlib.h>
#include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <map>
#include <string>
#include <numeric>
#include <functional>
#include <stack>
#include <math.h>
#include <algorithm>
#include<unistd.h>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<int,pii> piii;
typedef pair<double, double> pdd;
#define all(a) (a).begin(), (a).end()
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();
#define fi first
#define se second
#define sz(a) ((int)(a).size())
#define pb(x) push_back(x)
#define mem(a, b) memset(a, (b), sizeof(a))

void solve(){
    int i,j,k;
    int n; cin >> n;
    vector<ll> v(n);
    for(auto &x: v)  cin >> x;
    reverse(all(v));
    for(i=0; i<n-1; i++){
        if(v[i] < v[i+1]) continue;
        ll x = ceil((double)v[i] / (double)v[i+1]);
        v[i+1] *= x;
    }
    cout << v[n-1];
}

int main(){
    FASTIO
    solve();
}
//