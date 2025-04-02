class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int len = nums.size();
        int rSum = 0;
        int lSum = 0;  
        for(int i=1; i<len; i++){
            rSum += nums[i];
        }   

        for(int i=0; i<len; i++){
            if(i) rSum -= nums[i]; 
            if(rSum == lSum) return i;   
            lSum += nums[i];
        }
        return -1;
    }
};