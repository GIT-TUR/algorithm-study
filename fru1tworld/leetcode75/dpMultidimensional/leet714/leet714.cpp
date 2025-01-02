class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int n = prices.size();
        vector<int> free(n, 0), hold(n, 0);

        hold[0] = -prices[0];
        
        for (int i = 1; i < n; i++) {
            free[i] = max(free[i - 1], hold[i - 1] + prices[i] - fee);
            hold[i] = max(hold[i - 1], free[i - 1] - prices[i]);
        }
        
        return free[n - 1];
    }
};