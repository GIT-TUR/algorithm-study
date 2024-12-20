#include <iostream>
#include <set>

using namespace std;
typedef long long ll;
typedef pair<int, int> pii;

string cmp;

void make_cmp() {
    for(int i=1; i<30000; i++) {
        cmp += to_string(i);
    }
}

int find_idx(string str) {
    string temp = "";
    for(int i=1; i<30000; i++) {
        temp += to_string(i);
        if(temp.size() >= str.size()) return i;
    }
}
void solve() {
    string s; cin >> s;
    make_cmp();
    int idx = 0;
    int cmp_idx = 0;
    while(idx != s.size()) {
        if(cmp[cmp_idx] == s[idx]) {
            cmp_idx++;
            idx++;
        }else {
            cmp_idx++;
        }
    }
    cout << find_idx(cmp.substr(0, cmp_idx));
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
    return 0;
}

