class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
        while(k-- > 0){
            int idx = findMinimumIdx(nums);
            nums[idx] *= multiplier;
        }
        return nums;
    }

    public int findMinimumIdx(int[] nums){
        int val = nums[0];
        int idx = 0;
        for(int i = 1; i<nums.length; i++){
            if(nums[i] < val){
                idx = i;
                val = nums[i];
            }
        }
        return idx;
    }
}