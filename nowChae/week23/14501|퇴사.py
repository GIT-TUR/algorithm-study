import sys
input = sys.stdin.readline

N = int(input())
consulting = []
for _ in range(N):
    consulting.append(tuple(map(int, input().split(' '))))

dp = [0] * (N+1)

for i, t in enumerate(consulting):
    if i + t[0] <= N:
        dp[i + t[0]] = max(max(dp[:i+1]) + t[1], dp[i+t[0]])

print(max(dp))