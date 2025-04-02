#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

typedef long long ll;

int n;
string expr;
ll ans = LLONG_MIN;

ll calc(ll a, ll b, char op) {
    if(op == '+') return a + b;
    if(op == '-') return a - b;
    if(op == '*') return a * b;
}

void dfs(int idx, ll result) {
    if(idx >= n) {
        ans = max(ans, result);
        return;
    }

    ll nextNum = expr[idx+1] - '0';
    ll res1 = calc(result, nextNum, expr[idx]);
    dfs(idx + 2, res1);

    if(idx + 2 < n) {
        ll bracketRes = calc(expr[idx+1]-'0', expr[idx+3]-'0', expr[idx+2]);
        ll res2 = calc(result, bracketRes, expr[idx]);
        dfs(idx + 4, res2);
    }
}

int main() {
    cin >> n >> expr;
    dfs(1, expr[0]-'0');
    cout << ans;
    return 0;
}
