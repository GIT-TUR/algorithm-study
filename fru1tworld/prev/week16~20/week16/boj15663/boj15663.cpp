#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;

#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST  int tt; cin >> tt; while(tt--) solve();
#define fi first
#define se second
#define pb push_back

const int INF = 0x3f3f3f3f;

int n, m, arr[8], res[8];
bool check[8];

void func(int cnt) {
    if (cnt == m) {
        for (int i = 0; i < m; i++)
            printf("%d ", res[i]);
        printf("\n");
        return;
    }
    int xx = 0;
    for (int i = 0; i < n; i++) {
        if (!check[i] && arr[i] != xx) {
            res[cnt] = arr[i];
            xx = res[cnt];
            check[i] = true;
            func(cnt + 1);
            check[i] = false;
        }
    }
}

int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    sort(arr, arr + n);
    func(0);
}