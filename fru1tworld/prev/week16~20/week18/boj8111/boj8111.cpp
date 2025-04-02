#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <queue>
#include <memory.h>
using namespace std;
typedef long long ll;

pair<int, char> arr[20005];
bool visited[20005];

void bfs(int n) {
    queue<int> q;
    memset(visited, false,sizeof(visited));
    arr[1].first = -1;
    arr[1].second = '1';
    q.push(1);
    visited[1] = true;

    while (!q.empty()) {
        int num = q.front();
        if(num % n == 0) return;
        q.pop();
        int next1 = (num*10 + 0) % n;
        int next2 = (num*10 + 1) % n;

        if (!visited[next1]) {
            visited[next1] = true;
            q.push(next1);
            arr[next1].first = num;
            arr[next1].second = '0';
        }
        if (!visited[next2]) {
            visited[next2] = true;
            q.push(next2);
            arr[next2].first = num;
            arr[next2].second = '1';
        }
    }
}

void print(int parent){
    if(parent==-1) return;
    print(arr[parent].first);
    cout << arr[parent].second;

}
void solve() {
    int tt; cin >> tt;
    while(tt--) {
        int n;
        cin >> n;
        if(n == 1) {
            cout << "1\n";
        }else {
            bfs(n);
            print(0);
            cout << '\n';
        }
    }
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    solve();
}
