class Solution {
public:

    string convert(string s, int numRows) {
        vector<vector<char>> v(numRows);
        for(vector<char> &x : v){
            for(int i=0; i<s.size(); i++){
                x.push_back(' ');
            }
        }
        int idx = 0;
        int i, j=0;
        while(idx < s.size()){
            for(i=0; i<numRows; i++){
                v[i][j] = s[idx++]; 
                if(idx == s.size()) break;    
            }
            if(idx == s.size()) break;    
            i--;
            int temp = numRows - 1;
            while(i > 0 && temp > 1){
                v[--i][++j] = s[idx++];
                if(idx == s.size()) break;    
                temp--;
            }
            j++; 
        }

        return merge(v);
    }
    string merge(vector<vector<char>> &v){
        string res = "";
        for(auto x : v){
            for(auto y: x){
                if(y == ' ' || y == NULL) continue;
                res += y;
            }
        }
        return res; 
    }
};