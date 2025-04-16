class Solution {
public:
    int romanToInt(string s) {
    map<char, int> mp;
    map<string, int> ext; 
    mp['I'] = 1; 
    mp['V'] = 5; 
    mp['X'] = 10; 
    mp['L'] = 50;
    mp['C'] = 100; 
    mp['D'] = 500; 
    mp['M'] = 1000;
    ext["IV"] = 4;
    ext["IX"] = 9;
    ext["XL"] = 40;
    ext["XC"] = 90;
    ext["CD"] = 400;
    ext["CM"] = 900;
    int sum = 0;
    for(int i=0; i<s.size(); i++){
        if(i+1 <s.size()){
            string temp = "";
            temp += s[i];
            temp += s[i+1];
            if(ext[temp]){
                sum += ext[temp]; 
                i++;
                continue; 
            }
        }
        sum += mp[s[i]];
    }
    return sum; 
};
};