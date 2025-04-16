#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) 

void solve(){
    int i,j,k;
    int n; cin >> n >> k;
    list<int> li;
    for(i=1; i<=n; i++){
        li.push_back(i);
    }
    auto cur = li.begin();
    cout<< '<';
    while(!li.empty()){
        for(i=1; i<k; i++) {
            if(++cur == li.end()) cur = li.begin();
        }
        li.size() == 1 ?  cout << *cur : cout << *cur << ", ";
        cur = li.erase(cur);
        cur = (cur == li.end()) ? li.begin() : cur;
    }
    cout << '>';
}

int main(){
    FASTIO
    solve();
}