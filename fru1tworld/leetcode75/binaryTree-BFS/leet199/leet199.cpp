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
    vector<int> rightSideView(TreeNode* root) {
        queue<pair<int, TreeNode*>> q;
        vector<int> v;
        q.push({1,root});
        while(!q.empty()){
            int level = q.front().first;
            TreeNode *now  = q.front().second;
            q.pop(); 

            if(!now) continue;
            if(v.size() >= level)
                v[level-1] = now -> val; 
            else v.push_back(now->val); 

            
            q.push({level+1, now->left}); 
            q.push({level+1, now-> right});
        }
        return v; 
    }
};