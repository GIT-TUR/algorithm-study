class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cost.append(0)
        dp = len(cost) * [0]

        dp[0] = cost[0]
        dp[1] = min(dp[0]+cost[1], cost[1])
        

        for i in range(2, len(cost)):
            dp[i] = min(dp[i-1] + cost[i], dp[i-2] + cost[i])
        
        return dp[len(cost) - 1]

