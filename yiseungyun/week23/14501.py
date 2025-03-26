import sys  
input = sys.stdin.readline

N = int(input())
counsel = []
for _ in range(N):
  T, P = map(int, input().split())
  counsel.append([T, P])

dp = [0 for _ in range(N+1)]

for i in range(N-1, -1, -1):
  if i+counsel[i][0] <= N: 
    dp[i] = max(dp[i+counsel[i][0]]+counsel[i][1], dp[i+1])
  else: 
    dp[i] = dp[i+1]

print(dp[0])