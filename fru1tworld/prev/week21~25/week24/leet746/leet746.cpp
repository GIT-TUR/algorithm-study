class Solution {
    public:
        int minCostClimbingStairs(vector<int>& cost) {
            int len = cost.size();
            if(len == 1) return 0; 
            vector<int> dp(len);
            dp[0] = cost[0];
            dp[1] = cost[1];
            for(int i=2; i<len; i++){
                dp[i] = cost[i] + min(dp[i-1], dp[i-2]);
            }
            return min(dp[len-1], dp[len-2]);
        }
    };