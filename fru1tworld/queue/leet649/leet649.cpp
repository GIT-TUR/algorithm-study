class Solution {
public:
    std::queue<int> r;
    std::queue<int> d;
    string predictPartyVictory(string senate) {
        int n = senate.size();
        for(int i=0; i<n; i++){
            char x = senate[i];
            x == 'R' ? r.push(i) : d.push(i);
        }
        while(!r.empty() && !d.empty()){
            int rr = r.front();
            int dd = d.front();
            r.pop(); 
            d.pop();
            if(rr < dd){
                r.push(dd+n);
            }else{
                d.push(rr+n); 
            }

        }
        
        return d.empty() ? "Radiant" : "Dire"; 
    }
};
