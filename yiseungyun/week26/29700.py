import sys   
input = sys.stdin.readline

n, m, k = map(int, input().split())
seats = [] 

for _ in range(n):
  seats.append(list(map(int, input().rstrip())))

def check(seats, n, m, k):
  count = 0
  for i in range(n):
    for j in range(m-k+1):
      if seats[i][j:j+k] == [0]*k:
        count += 1
  return count

print(check(seats, n, m, k))