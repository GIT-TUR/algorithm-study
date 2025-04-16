class Solution {
public:
    int getSize(int x){
        int size = 0; 
        int temp = x; 
        while(temp){
            size++; 
            temp/=10; 
        }
        return size;
    }
    bool check(int x, int mul){
        
        int mx = INT_MAX;
        if(x < 0){
            mx *= -1;
            mx -= 1; 
        }
        while(mul){
            int cmpA = mx/mul;
            int cmpB = x%10; 
            if(cmpA > 0){
                if(cmpA < cmpB) return false; 
                else if(cmpA > cmpB) return true;
            }else{
                if(cmpA > cmpB) return false; 
                else if(cmpA < cmpB) return true;
            }
            mx-= cmpA*mul;  
            mul/=10; 
            x/=10;
            
        }
        return true; 
    }
    int reverse(int x) {
        int y = 0;
        int mul = 1;
        int size = getSize(x);
        
        int tempSize = size; 
        while(size > 1){
            mul *= 10;
            size--; 
        }
        if(tempSize == 10){
            if(!check(x, mul)) return 0;
        }
        while(x){
            y += (x%10)*mul;
            mul/= 10;
            x/=10; 
        }
        return y; 
    }
};