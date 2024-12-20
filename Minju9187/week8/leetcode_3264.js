const nums = [2, 1, 3, 5, 6];
const k = 5;
const multiplier = 2;

var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    const min = Math.min(...nums);
    const idx = nums.indexOf(min);
    nums[idx] *= multiplier;
  }
  return nums;
};

console.log(getFinalState(nums, k, multiplier));
