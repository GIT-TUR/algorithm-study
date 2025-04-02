#include<iostream>
#include<math.h>
#include<vector>
using namespace std;
typedef long long ll;

int a,b;
void solve() {
    int i,j,k;
    int n;
    cin >> n;
    vector<int> v(n);
    for (i = 0; i < n; i++) {
        cin >> v[i];
    }

    int l = 0;
    int r = n - 1;

    int resLiquid = abs(v[l] + v[r]);
    a = v[l];
    b = v[r];

    while (l < r) {
        int temp = v[l] + v[r];
        if (abs(temp) < resLiquid) {
            resLiquid = abs(temp);
            a = v[l];
            b = v[r];
        }
        if (temp < 0) l++;
        else r--;
    }

    cout << a << " " << b << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}
