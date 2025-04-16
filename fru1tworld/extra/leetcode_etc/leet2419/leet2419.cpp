class Solution {
    public:
        int longestSubarray(vector<int>& nums) {
            int maxVal = 0; 
            int ans = 0;
            int currentStreak = 0;
            for (int num : nums) {
                if (maxVal < num) {
                    maxVal = num;
                    ans = currentStreak = 0;
                }
                if (maxVal == num) {
                    currentStreak++;
                } else {
                    currentStreak = 0;
                }
    
                ans = max(ans, currentStreak);
            }
            return ans;
        }
    };