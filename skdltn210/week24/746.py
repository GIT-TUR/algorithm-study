class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        dp = [0] * n
        dp[0] = cost[0]
        for i in range(1, len(dp)):
            dp[i] = min(cost[i] + dp[i - 1], cost[i] + dp[i - 2])
        return min(dp[n - 1], dp[n - 2])
