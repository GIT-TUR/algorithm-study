#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int LIMIT = 1440;
const int ERROR = -1;

void solve() {
    int n;
    cin >> n;
    vector<int> num(n);
    int sum = 0, maxVal = 0;
    for (int i = 0; i < n; i++) {
        cin >> num[i];
        sum += num[i];
        maxVal = max(maxVal, num[i]);
    }
    int remain = sum - maxVal;
    int result = sum / 2 + (sum % 2 ? 1 : 0);
    if (maxVal > remain) result = maxVal;
    cout << (result > LIMIT ? ERROR : result);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}