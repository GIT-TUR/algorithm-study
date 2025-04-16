#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <stack>
using namespace std;

typedef long long ll;
typedef pair<int, int> pii;

stack<int> bw;
stack<int> fw;
int now = -1;

void frontward() {
    if(fw.empty()) return;
    bw.push(now);
    now = fw.top();
    fw.pop();
}
void backward() {
    if(bw.empty()) return;
    fw.push(now);
    now = bw.top();
    bw.pop();
}

void access(int page) {
    if(now == -1) {
        now = page;
    }else {
        while(!fw.empty()) fw.pop();
        bw.push(now);
        now = page;
    }
}

void compress() {
    stack<int> temp;
    while(!bw.empty()) {
        if(temp.empty()) {
            temp.push(bw.top());
            bw.pop();
        }
        else {
            if(temp.top() != bw.top()) temp.push(bw.top());
            bw.pop();
        }
    }
    while(!temp.empty()) {
        bw.push(temp.top());
        temp.pop();
    }
}

void stack_print(stack<int> &st) {
    if(st.empty()) cout << "-1\n";
    else {
        while(!st.empty()) {
            cout << st.top() << " ";
            st.pop();
        }
        cout << '\n';
    }
}

void solve() {
    int n,q;
    cin >> n >> q;
    while(q--) {
        char op; cin >> op;
        if(op == 'A') {
            int page; cin >> page;
            access(page);
        }
        if(op == 'B') backward();
        if(op == 'C') compress();
        if(op == 'F') frontward();
    }
    cout << now << '\n';
    stack_print(bw);
    stack_print(fw);
}

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    solve();
    return 0;
}