#include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <algorithm>
#include <string>
#include <stack>

using namespace std;

typedef long long ll;
int arr[150][150];
int dfs(int x1, int y1, int x2,int y2) {
    bool check = true;
    int cmp = arr[x1][y1];
    for(int i=x1; i<x2; i++){
        for(int j=y1; j<y2; j++){
            if(arr[i][j] != cmp){
                check = false;
                break;
            }
        }
        if(!check) break;
    }
    if(check){
        return 1; 
    }else{
        return 
dfs(x1,y1,x2/2,y2/2) + 
dfs(x2/2,y1,x2,y2) + 
dfs(x1,y2/2,x2,y2) + 
dfs(x1/2,y1/2,x2,y2);
    }
    
}
void solve() {
    int i,j,k;
    int n; cin >> n; 
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            cin >> arr[i][i];
        }
    }
    return #include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <algorithm>
#include <string>
#include <stack>

using namespace std;

typedef long long ll;
int arr[150][150];
int w, b;

void dfs(int x1, int y1, int x2, int y2) {
    bool check = true;
    int cmp = arr[x1][y1];
    for (int i = x1; i < x2; i++) {
        for (int j = y1; j < y2; j++) {
            if (arr[i][j] != cmp) {
                check = false;
            }
        }
    }

    if (check) {
        cmp ? b++ : w++;
        return;
    }
    int midX = (x1 + x2) / 2;
    int midY = (y1 + y2) / 2;
    dfs(x1, y1, midX, midY);
    dfs(midX, y1, x2, midY);
    dfs(x1, midY, midX, y2);
    dfs(midX, midY, x2, y2);
}


void solve() {
    int i, j, k;
    int n;
    cin >> n;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            cin >> arr[i][j];
        }
    }
    dfs(0, 0, n, n);
    cout << w << '\n' << b;
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}
dfs(0,0,n-1,n,-1);
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}
