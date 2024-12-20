class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int l=0, r; 
        int n = nums.size();
        for(r=0; r<n; r++){
            if(nums[r] == 0) k--; 
            if(k<0) k += 1 - nums[l++];
        }
        return r-l; 
    }
};