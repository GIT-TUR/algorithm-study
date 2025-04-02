#include <bits/stdc++.h>

using namespace std;
typedef pair<int,int> pii;
typedef long long ll;
typedef unsigned long long ull;

int arr[1050][1050];
int dp[1050][1050];

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    int i,j,k;
   int n,m;
   cin >> n >> m ;

   for(i=1; i<=n; i++){
       for(j=1; j<=n; j++){
           cin >> arr[i][j];
       }
   }

   for(i=1; i<=n; i++){
       for(j=1; j<=n; j++){
           dp[i][j] = dp[i -1][j] + dp[i][j-1] - dp[i-1][j-1] + arr[i][j];
       }
   }

   int x,y;
   while(m--){
       cin >> i >> j >> x >> y;
       cout << dp[x][y] - dp[x][j-1] - dp[i-1][y] + dp[i -1 ][j-1] << '\n';
   }
}
