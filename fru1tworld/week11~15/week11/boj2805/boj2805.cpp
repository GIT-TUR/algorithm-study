#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

double PI = 3.14159265358979 ;
int arr[1000001];

int main(){
  int i,j,k;
  ll mid, min ,max,cnt;
  max = 0;
  ll n,target;
  target = 0;
  cin >> n >> k;
  for(i=0;i<n;i++) {
      scanf("%d", &arr[i]);
      if (arr[i] > max) max = arr[i];
  }

  min = 1;


  while(min < max){
      mid =  ( max + min) / 2;
      cnt = 0;
      for(i=0; i<n; i++){
          ll dif = arr[i] - mid;
          if( dif > 0 ) cnt += dif;
          if( cnt >= k) break;
      }
      if(cnt >= k){
          target = mid;
          min = mid + 1;
      }else{
          max = mid;
      }
  }
  cout << target;
}