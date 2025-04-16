#include <iostream>
#include <vector>
using namespace std;

const int64_t MOD = 1000000007;

void solution(int N, const vector<int64_t>& performance) {
    int64_t result = 0;
    int64_t prev = 0;

    for (const int64_t& n : performance) {
        prev = ((prev + 1) * n) % MOD;
        result = (result + prev) % MOD;
    }

    cout << result << endl;
}

int main() {
    int N;
    cin >> N;

    vector<int64_t> performance(N);
    for (int i = 0; i < N; ++i) {
        cin >> performance[i];
    }

    solution(N, performance);

    return 0;
}