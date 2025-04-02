#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <queue>
#include <memory.h>
using namespace std;
typedef long long ll;

int n,q;
int parent[250005];
int cnt[250005];

int tparent[250005];
bool visited[250005];
set<int> edge[250005];
int getParent(int p) {
    if(p == tparent[p]) return p;
    else return tparent[p] = getParent(tparent[p]);
}

void setUnion(int a, int b) {
    a = getParent(a);
    b = getParent(b);
    if(a == b) return;
    if( a > b) {
        tparent[a] = b;
        cnt[b] += cnt[a];
    }else {
        tparent[b] = a;
        cnt[a] += cnt[b];
    }
}


void find(int x) {
    visited[x] = true;
    for(auto &next: edge[x]) {
        if(visited[next]) continue;
        parent[next] = x;
        find(next);
    }
    visited[x] = false;
}

ll go(vector<int> &query) {
    for(auto& v: query) {
        cnt[v] = 1;
        tparent[v] = v;
        visited[v] = true;;
    }

    for(auto& v: query) {
        if(visited[parent[v]]) {
            setUnion(v,parent[v]);
        }
    }
    ll ans = 0;
    for(auto v: query) {
        v = getParent(v);
        if(visited[v]) {
            ans += (ll)cnt[v] * (cnt[v] - 1) /2;
            visited[v] = false;
        }
    }
    for(auto v: query) {
        visited[v] = false;
        cnt[v] = 0;
    }
    return ans;
}

void solve() {
    int i,j,k;
    int n; cin >> n;
    for(i=0; i<n-1; i++) {
        int u, v;
        cin >> u >> v;
        edge[u].insert(v);
        edge[v].insert(u);
    }
    find(1);
    int q;
    cin >> q;
    while(q--) {
        cin >> k;
        vector<int> query(k);
        for(auto &x: query) {
            cin >> x;
        }
        cout << go(query) << '\n';
    }
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
}
