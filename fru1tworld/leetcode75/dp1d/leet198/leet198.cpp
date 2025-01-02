class Solution {
public:
    int rob(vector<int>& nums) {
        int len = nums.size();
        if(len == 1) return nums[0];
        vector<int> dp(len, 0);
        dp[0] = nums[0];
        dp[1] = nums[1];

        if(len == 2) return max(dp[0], dp[1]);
        
        dp[2] = max(nums[2]+nums[0] , nums[1]);
        for(int i=3; i<len; i++){
            dp[i] = max(nums[i]+dp[i-2], dp[i-1]);
            dp[i] = max(nums[i]+dp[i-3], dp[i]);
        }
        return max(dp[len-1], dp[len-2]);
    }
};