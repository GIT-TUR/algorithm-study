#include <iostream>

using namespace std;
#define MAX 1000000000

typedef long long ll;
int cnt=-1;

int main() {
    ll x,y,z;
    cin >> x >> y;
    z=(y*100/x);

    if(z>=99) {
        cout << cnt;
        return 0; 
    }
    
    int l=0, r= MAX;
    while(l<=r) {
        int mid=(l+r)/2;
        int temp=(y+mid) * 100 / (x+mid);

        if(z<temp) r=mid-1;
        else l=mid+1;
    }

    cout << l;
}
