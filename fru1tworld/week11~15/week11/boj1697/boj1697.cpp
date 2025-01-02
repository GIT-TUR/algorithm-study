#include <bits/stdc++.h>

using namespace std;
typedef long long ll;
typedef pair<int,int> pii;

int cnt[100001];
bool visited[100001];

void bfs(int a){
    queue<int> q;
    q.push(a);
    visited[a]= true;
    while(!q.empty()){
        int num = q.front();
        int arr[3];
        q.pop();
        arr[0] = num * 2;
        arr[1] = num + 1;
        arr[2] = num - 1;
        for(int i=0; i<3; i++){
            if( arr[i] >= 0 && arr[i]<= 100000 && !visited[arr[i]]){
                visited[arr[i]] = true;
                q.push(arr[i]);
                cnt[arr[i]] = cnt[num] + 1;
            }
        }
    }
}
int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int i,j,k;
    int a,b;
    cin >> a >> b;
    bfs(a);
    cout << cnt[b];
}