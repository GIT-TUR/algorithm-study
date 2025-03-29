n = int(input())
time = [0]*(n+2)
pay = [0]*(n+2)
dp = [0]*(n+2)

for i in range(1, n+1):
  time[i], pay[i] = map(int, input().split())

for i in range(n, 0, -1):
  if i + time[i] > n + 1:
    dp[i] = dp[i+1]
  else:
    dp[i] = max(dp[i+1], pay[i] + dp[i + time[i]])
    
print(dp[1])