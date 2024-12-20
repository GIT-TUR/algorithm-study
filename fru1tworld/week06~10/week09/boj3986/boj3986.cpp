#include <iostream>
#include <stack>
#include <string>

using namespace std;

void solve() {
    int n;
    cin >> n;

    int ans = 0;
    for (int i = 0; i < n; ++i) {
        string s;
        cin >> s;

        stack<int> st;
        for (char c : s) {
            int x = (c == 'A') ? 0 : 1;

            if (st.empty() || st.top() != x) {
                st.push(x);
            } else {
                st.pop();
            }
        }

        if (st.empty()) {
            ++ans;
        }
    }

    cout << ans << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    solve();
    return 0;
}
