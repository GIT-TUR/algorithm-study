class Solution {
    public:
        int largestAltitude(vector<int>& gain) {
            int n = gain.size();
            vector<int> dp(n+1);
            for(int i=1; i<=n; i++){
                dp[i] = dp[i-1] + gain[i-1]; 
            }
            return *max_element(dp.begin(), dp.end()); 
        }
    };