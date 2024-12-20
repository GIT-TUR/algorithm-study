class Solution {
public:
    int minimumSize(vector<int>& nums, int maxOperations) {
        int len = nums.size();
        int l = 1 ,r = *max_element(nums.begin(), nums.end()); 
        int ans = r; 
        while(l+1 < r){
            int m = (l+r)/2; 
            int cnt = 0;
            for(int i=0; i<len; i++){
                if(m >= nums[i]) continue; 
                else{
                    cnt += (nums[i]-1)/m;
                }
            }
            if(cnt > maxOperations){
                l = m; 
            }else{
                r = m; 
                ans = r; 
            }
        }
        return ans; 
    }
};