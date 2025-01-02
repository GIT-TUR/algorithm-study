#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

struct str{
    int val;
    int idx;
};

bool cmp(str a , str b){
    if ( a.val  < b.val ) return true;
    else return false;
}
str arr[1000001];
int xy[1000001];
int main() {
    int i, j, k;
    int n,flag;
    flag = 0;
    cin >> n;
    for(i=0; i<n; i++){
        scanf("%d",&arr[i].val);
        arr[i].idx = i;
    }
    sort(arr,arr+n,cmp);
    for(i=0; i<n; i++){
        if(arr[i].val < arr[i+1].val ){
            arr[i].val = flag;
            flag++;
        }else{
            arr[i].val = flag;
        }
    }
    for(i=1; i<n; i++){
        xy[arr[i].idx] = arr[i].val;
    }
    for(i=0; i<n; i++){
        printf("%d ", xy[i]);
    }
}

