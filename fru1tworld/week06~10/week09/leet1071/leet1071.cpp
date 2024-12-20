class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        string ans = "";
        string divisor = "";
        if(str1.size() > str2.size()){
            swap(str1, str2); 
        }
        for (int i=0; i<str1.size(); i++){
            divisor += str1[i]; 
            if(str1.size() % divisor.size() != 0 
            || str2.size() % divisor.size() != 0) continue;

            string cmp1 = "";
            string cmp2 = "";

            for(int j=0; j<str1.size()/divisor.size(); j++){
                cmp1 += divisor;
            }
            for(int j=0; j<str2.size()/divisor.size(); j++){    
                cmp2 += divisor;
            }

            if(cmp1 == str1 && cmp2 == str2){
                ans = divisor;
            }
        } 
        return ans; 
    }
};
