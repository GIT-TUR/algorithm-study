class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int n = nums.size();
        int r = n-1;
        int l = 0;
        while(r>l){
            int mid = (r+l)/2;
            if(nums[mid] > nums[mid+1]) r = mid;
            else l = mid +1;
        }
        return l;
    }
};