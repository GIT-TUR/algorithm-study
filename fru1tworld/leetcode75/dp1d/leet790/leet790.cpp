class Solution {
public:
    int numTilings(int n) {
        int MOD = 1000000007;
        if (n <= 2) {  
            return n;
        }
        long f[n + 1];
        long p[n + 1];
        f[1] = 1L;
        f[2] = 2L;
        p[2] = 1L;
        for (int k = 3; k < n + 1; ++k) {
            f[k] = (f[k - 1] + f[k - 2] + 2 * p[k - 1]) % MOD;
            p[k] = (p[k - 1] + f[k - 2]) % MOD; 
        }
        return static_cast<int>(f[n]);
    }
};