#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

typedef long long ll;

struct Node {
    int l, r;
    Node() : l(-1), r(-1) {}
    Node(int l, int r): l(l), r(r) {}
};

vector<Node> nd;
vector<int> v;
int n;
ll ans = 0;

void insert(int x, int node = 1, int dep = 30) {
    if(dep == -1) return;
    if((x >> dep) & 1) {
        if(nd[node].r == -1) {
            nd[node].r = nd.size();
            nd.emplace_back();
        }
        insert(x, nd[node].r, dep - 1);
    } else {
        if(nd[node].l == -1) {
            nd[node].l = nd.size();
            nd.emplace_back();
        }
        insert(x, nd[node].l, dep - 1);
    }
}

int query(int x, int node = 1, int dep = 30) {
    if(dep == -1) return 0;
    if((x >> dep) & 1) {
        if(nd[node].r != -1) return query(x, nd[node].r, dep - 1);
        return (1 << dep) + query(x, nd[node].l, dep - 1);
    }
    if(nd[node].l != -1) return query(x, nd[node].l, dep - 1);
    return (1 << dep) + query(x, nd[node].r, dep - 1);
}

void go(int s, int e, int dep = 30) {
    if(dep == -1 || s >= e) return;
    int m = s;
    while(m <= e && !(v[m] & (1 << dep))) {
        m++;
    }
    m--;

    go(s, m, dep - 1);
    go(m + 1, e, dep - 1);

    if(s > m || m + 1 > e) return;

    nd.clear();
    nd.resize(2);
    for (int i = s; i <= m; i++) {
        insert(v[i]);
    }
    ll res = LLONG_MAX;
    for (int i = m + 1; i <= e; i++) {
        res = min<ll>(res, query(v[i]));
    }
    ans += res;
}

void solve() {
    cin >> n;
    v.resize(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    sort(v.begin(), v.end());
    go(0, n - 1);
    cout << ans << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
