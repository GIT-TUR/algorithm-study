#include <iostream>
#include <algorithm>
#include <climits>
#include <vector>
#include <functional>
#include <queue>
using namespace std;

typedef long long ll;

void solve() {
    priority_queue<int> pq;
    int q; cin >> q;
    while(q--) {
        int a; cin >> a;
        for(int i=0; i<a; i++) {
            int x; cin >> x;
            pq.push(x);
        }
        if(a == 0) {
            if(pq.empty()) cout << -1 << '\n';
            else {
                cout << pq.top() << '\n';
                pq.pop();
            }
        }
    }
}
int main() {
    solve();
    return 0;
}
