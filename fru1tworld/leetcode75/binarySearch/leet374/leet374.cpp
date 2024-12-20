/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        long long l=1, r=n;
        while(true){
            long long m = (l+r)/2;
            int pick = guess((int)m);
            if(pick == 0) return m; 

            if(pick == -1){
                r = m-1;
            }else{
                 l = m+1;
            }
        }
    }
};