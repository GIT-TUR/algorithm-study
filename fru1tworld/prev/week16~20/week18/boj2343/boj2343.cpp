#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

void solve() {
    int n, M;
    cin >> n >> M;
    vector<int> v(n);
    for(auto &x : v) {
        cin >> x;
    }
    
    int l = 1;
    int h = 1000000000;
    int result = 0;
    
    while(l <= h){
        int mid = (l + h) / 2;
        int cnt = 1;
        int sum = 0;
        for(int i = 0; i < n; i++){
            if(mid < v[i]){
                cnt = mid + 1; 
                break;
            }
            if(sum + v[i] <= mid) {
                sum += v[i];
            } else {
                sum = v[i];
                cnt++;
            }
        }
        if(cnt <= M){
            result = mid;
            h = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    cout << result;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
    return 0;
}
