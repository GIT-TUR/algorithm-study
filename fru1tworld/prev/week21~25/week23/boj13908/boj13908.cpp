#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <queue>

using namespace std;
typedef long long ll;

typedef pair<int, int> pii;
const int INF = 1e9;

int ans,n,m;

vector<int> pw;
vector<int> partialPW;
void dfs(int len) {
    if(len == n) {
        for(int i=0; i<m; i++) {
            if(find(pw.begin(), pw.end(), partialPW[i]) == pw.end()) return;
        }
        ans++;
        return;
    }

    for(int i=0; i<10; i++) {
        pw.push_back(i);
        dfs(len+1);
        pw.pop_back();
    }

}
void solve()  {
    int i,j,k;
    cin >> n >> m;
    for(int i=0; i<m; i++) {
        int num;
        cin >> num;
        partialPW.push_back(num);
    }

    dfs(0);
    cout << ans;

}

int main() {

    solve();
}