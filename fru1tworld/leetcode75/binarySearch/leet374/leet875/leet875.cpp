class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int i=1;
        int j= *max_element(piles.begin(), piles.end());
        int res=j;
        while (i<=j){
            int mid=(i+j)/2;
            long time=0;
            for(int k=0; k<piles.size(); k++){
                time+=ceil(static_cast<double>(piles[k])/mid);
            }
            if(time<=h){
                res=mid;
                j=mid-1;
            }else{
                i=mid+1;
            }
        }
        return res;
    }
};