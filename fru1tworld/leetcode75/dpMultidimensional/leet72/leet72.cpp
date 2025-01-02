class Solution {
public:
    vector<vector<int>> memo;
    int minDistance(string word1, string word2) {
        int word1Length = word1.size();
        int word2Length = word2.size();
        if (word1Length == 0) {
            return word2Length;
        }
        if (word2Length == 0) {
            return word1Length;
        }
        vector<vector<int>> dp(word1.length() + 1,
                               vector<int>(word2.length() + 1, 0));
        for (int word1Index = 1; word1Index <= word1Length; word1Index++) {
            dp[word1Index][0] = word1Index;
        }
        for (int word2Index = 1; word2Index <= word2Length; word2Index++) {
            dp[0][word2Index] = word2Index;
        }
        for (int word1Index = 1; word1Index <= word1Length; word1Index++) {
            for (int word2Index = 1; word2Index <= word2Length; word2Index++) {
                if (word2[word2Index - 1] == word1[word1Index - 1]) {
                    dp[word1Index][word2Index] =
                        dp[word1Index - 1][word2Index - 1];
                } else {
                    dp[word1Index][word2Index] =
                        min(dp[word1Index - 1][word2Index],
                            min(dp[word1Index][word2Index - 1],
                                dp[word1Index - 1][word2Index - 1])) +
                        1;
                }
            }
        }

        return dp[word1Length][word2Length];
    }
};