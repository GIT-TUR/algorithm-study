#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N, M;
    cin >> N >> M;
    vector<int> rollCake(N);
    for (int i = 0; i < N; i++) {
        cin >> rollCake[i];
    }
    
    sort(rollCake.begin(), rollCake.end());
    stable_sort(rollCake.begin(), rollCake.end(), [](int a, int b) {
        return (a % 10) < (b % 10);
    });
    
    int count = 0;
    for (int cake : rollCake) {
        if (M > 0) {
            if (cake < 10) continue;
            if (cake % 10 == 0) {
                int temp = cake / 10 - 1;
                if (temp == 0) {
                    count++;
                } else {
                    if (M >= temp) {
                        count += temp + 1;
                        M -= temp;
                    } else {
                        count += M;
                        break;
                    }
                }
            } else {
                int temp = cake / 10;
                if (M >= temp) {
                    count += temp;
                    M -= temp;
                } else {
                    count += M;
                    break;
                }
            }
        } else {
            break;
        }
    }
    
    cout << count;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
