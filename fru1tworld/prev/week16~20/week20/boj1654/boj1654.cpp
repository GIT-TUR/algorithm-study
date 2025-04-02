#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

double PI = 3.14159265358979 ;

int main(){
  int i,j,k;
  ll mid, l ,r,cnt;
  ll n,target;
  target = 0;
  int arr[10001];
  cin >> n >> k;
  for(i=0;i<n;i++) scanf("%d",&arr[i]);
  sort(arr ,arr + n);
  l = 1; r = arr[n-1];


  while(l < r){
      mid =  ( r + l) / 2;
      cnt = 0;
      for(i=0; i<n; i++){
          cnt += arr[i]/ mid;
          if ( cnt >= k) break;
      }
      if(cnt >= k){
          target = mid;
          l = mid + 1;
      }else{
          r = mid;
      }
  }
  cnt = 0 ;
  for(i=0;i<n;i++){
      cnt += arr[i]/r;
      if ( cnt >= k ) target = r;
  }
  cout << target;
}
