class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        vector<int> ans;
        stack<int> st; 
        for(auto x: asteroids){
            if(x < 0){
                while(!st.empty()){
                    if(abs(x) > st.top()) st.pop();                    
                    else break;
                }
                if(!st.empty() && abs(x) == st.top()) st.pop();
                else if(st.empty()) ans.push_back(x);
            }else{
                st.push(x);
            }
            
        }
        vector<int> temp; 
        while(!st.empty()){
            temp.push_back(st.top());
            st.pop();
        }
        reverse(temp.begin(), temp.end());
        for(auto x: temp){
            ans.push_back(x);
        }
        return ans; 
    }
};