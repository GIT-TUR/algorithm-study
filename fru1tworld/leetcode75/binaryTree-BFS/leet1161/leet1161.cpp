/**
 * Definition for a binary tree node.

 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}

 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        vector<int> v(1005);
        queue<pair<int,TreeNode*>> q;
        q.push({0, root});
        int max_depth = 1; 
        while(!q.empty()){
            TreeNode* now = q.front().second;
            int level = q.front().first;
            q.pop();

            if(!now) continue;
            
            v[level] += now -> val;
            q.push({level+1, now -> left});
            q.push({level+1, now -> right});
            max_depth = max(max_depth, level+1);
        }
        int mx = -100000;
        int ans = 0;
        for(int i=0; i<max_depth; i++){
            if(mx < v[i]){
                mx = v[i];
                ans = i+1; 
            }
        }

        return ans; 
    }
};