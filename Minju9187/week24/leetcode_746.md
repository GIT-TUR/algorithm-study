# 문제

746 | Min Cost Climbing Stairs
https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&envId=leetcode-75

## 문제 풀이

DP

dp[i - 1] + cost[i - 1] 와 dp[i - 2] + cost[i - 2] 중 작은 값을 dp에 저장
제일 뒤의 값이 결과값
