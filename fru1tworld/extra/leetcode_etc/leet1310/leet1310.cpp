class Solution {
    public:
        int prefix[30005];
        vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {
            for(int i=1; i<=arr.size(); i++){
                prefix[i] = arr[i-1] ^ prefix[i-1];
            }
            vector<int> ans; 
            for(auto x: queries){
                int l = x[0];
                int r = x[1];
                l++, r++; 
                ans.push_back(prefix[l-1]^prefix[r]);
            }
            return ans; 
        }
    };