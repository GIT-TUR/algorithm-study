bool check(int l, int r, string &s){
    int cmp = 0;
    set<char> st; 
    for(int i=l; i<=r; i++){
        if(st.find(s[i]) != st.end()) return false; 
        st.insert(s[i]);
    }
    return true; 
}
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int ans = 0;
        int l=0;
        int r=0;
        while(r < s.size()){
            if(check(l,r, s)){
                r++;
            }else{
                r++;
                l++; 
            }
        }
        return r-l; 
    }
};