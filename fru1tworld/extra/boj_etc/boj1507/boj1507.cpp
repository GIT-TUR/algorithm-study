#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int INF = 1e9;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> dist(n, vector<int>(n));
    vector<vector<int>> original_dist(n, vector<int>(n));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> dist[i][j];
            original_dist[i][j] = dist[i][j];
        }
    }

    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    cout << "-1\n";
                    return 0;
                }
            }
        }
    }

    int total_cost = 0;
    vector<vector<bool>> included(n, vector<bool>(n, false)); // 간선 포함 여부

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            bool is_needed = true;
            for (int k = 0; k < n; k++) {
                if (k != i && k != j && dist[i][j] == dist[i][k] + dist[k][j]) {
                    is_needed = false;
                    break;
                }
            }
            if (is_needed) {
                total_cost += original_dist[i][j];
                included[i][j] = included[j][i] = true;
            }
        }
    }

    cout << total_cost << "\n";
    return 0;
}
