import sys
import heapq
input = sys.stdin.readline

n, s = map(int, input().split())
m = int(input().rstrip())
times = [] 

for _ in range(m):
  times.append(int(input().rstrip()))

pq = [(0, i) for i in range(m)]
heapq.heapify(pq)

eaten = 0
last_eaten = 0

while eaten < n-s:
  time, person = heapq.heappop(pq)
  eaten += 1
  last_eaten = person+1
  heapq.heappush(pq, (time+times[person], person))

print(last_eaten)