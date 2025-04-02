#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

typedef pair<int, int> pii;
typedef long long ll;

void solve() {
    int n, m, k;
    cin >> n >> m >> k;
    vector<pii> v(k);
    for (int i = 0; i < k; i++) {
        cin >> v[i].first >> v[i].second;
    }

    sort(v.begin(), v.end(), [](const pii &a, const pii &b) {
        return a.second < b.second;
    });

    priority_queue<int, vector<int>, greater<int>> pq;
    ll total = 0;
    int ans = -1;
    for (int i = 0; i < k; i++) {
        pq.push(v[i].first);
        total += v[i].first;

        if (pq.size() > (size_t)n) {
            total -= pq.top();
            pq.pop();
        }

        if (pq.size() == (size_t)n && total >= m) {
            ans = v[i].second;
            break;
        }
    }
    cout << ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
