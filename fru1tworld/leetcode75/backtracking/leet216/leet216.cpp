class Solution {
public:
void help(vector<vector<int>> &res,vector<int> &temp,vector<int>&keys,int tar,int k,int sm,int i){
    if(i==9){
        if(tar==sm && k==temp.size()){
            res.push_back(temp);
        }
        return ;
    }
    help(res,temp,keys,tar,k,sm,i+1);
    if(sm<=tar){
        temp.push_back(keys[i]);
        help(res,temp,keys,tar,k,sm+keys[i],i+1);
        temp.pop_back();
    }
}
    vector<vector<int>> combinationSum3(int k, int n) {
    vector<vector<int>>  res;
    vector<int> temp;
    vector<int> keys={1,2,3,4,5,6,7,8,9};
    help(res,temp,keys,n,k,0,0);
    return res;   
    }
};