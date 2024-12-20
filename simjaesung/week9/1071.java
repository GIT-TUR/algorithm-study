class Solution {
    public String gcdOfStrings(String str1, String str2) {
        int len1 = str1.length();
        int len2 = str2.length();
        int gcd = gcd(len1,len2);
        String repeatString = str1.substring(0,gcd);
        if(checkRepeat(gcd,str1,repeatString) && checkRepeat(gcd,str2,repeatString)){
            return repeatString;
        }else{
            return "";
        }
    }

    public int gcd(int a, int b){
        while(b != 0){
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    public boolean checkRepeat(int gcd, String s, String repeatString){
        for(int i = 0; i< s.length(); i += gcd){
            if(!s.substring(i,i + gcd).equals(repeatString)){
                return false;
            }
        }
        return true;
    }
}