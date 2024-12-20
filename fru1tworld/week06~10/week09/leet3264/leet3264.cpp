class Solution {
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        vector<pair<int, int>> hp;
        for (int i = 0; i < nums.size(); i++) {
            hp.push_back({nums[i], i});
        }

        make_heap(hp.begin(), hp.end(), greater<>());

        while (k--) {
            pop_heap(hp.begin(), hp.end(), greater<>());
            auto [value, i] = hp.back();
            hp.pop_back();

            nums[i] *= multiplier;
            hp.push_back({nums[i], i});
            push_heap(hp.begin(), hp.end(), greater<>());
        }

        return nums;
    }
};