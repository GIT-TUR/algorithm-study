import sys   
input = sys.stdin.readline

n, k = map(int, input().split())
chocolate = list(map(int, input().split()))

chocolate.sort()
min_chocolate = chocolate[0] 
max_count = 0
min_day = 0

for i in range(1, n):
  if chocolate[i] > min_chocolate:
    min_day += 1
    max_count += (chocolate[i]-min_chocolate)

print(max_count, min_day)