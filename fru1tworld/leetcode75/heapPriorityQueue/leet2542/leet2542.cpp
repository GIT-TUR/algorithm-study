#define pii pair<int,int>
class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        priority_queue<pii> maxHeap;
        priority_queue<pii,vector<pii>,greater<pii>> minHeap;

        long long ans=INT_MIN;
        long long score=0;
        long long sum=0;
        
        for(int i=0;i<nums1.size();i++) {
            maxHeap.push({nums1[i],i});
        }
        
        while(!maxHeap.empty() && k>0) {
            pii top = maxHeap.top();
            sum+=top.first;
            minHeap.push({nums2[top.second],top.second});
            maxHeap.pop();
            k--;
        }

        int minmul=minHeap.top().first;

        score=sum*minmul;
        ans=max(ans,score);
         
        while(!maxHeap.empty()) {
            pii mintop=minHeap.top();
            sum-=nums1[mintop.second];
            minHeap.pop();

            pii maxtop=maxHeap.top();
            sum+=maxtop.first;
            minHeap.push({nums2[maxtop.second],maxtop.second});
            maxHeap.pop();

            minmul=minHeap.top().first;
            score=sum*minmul;
            ans=max(ans,score);
        }
        return ans;
    }
};