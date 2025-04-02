#include <bits/stdc++.h>

typedef long long ll;
using namespace std;

int main(){
    int n;
    int num;
    priority_queue<pair<int, int>, vector<pair<int, int> >, greater<pair<int, int> > > pq;
    
    scanf("%d", &n);
    while (n--) {
        scanf("%d", &num);
        if (num == 0) {
            if (pq.empty()) {
                printf("0\n");
            }
            else {
                printf("%d\n", pq.top().second);
                pq.pop();
            }
        }
        else {
            pq.push(make_pair(abs(num), num));
        }
    }
    return 0;
}