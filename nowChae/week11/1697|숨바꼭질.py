import sys
from collections import deque
input = sys.stdin.readline

N, K = map(int, input().split())

position = [float('inf')] * 100001
visited = [False]*100001

queue = deque([N])
position[N] = 0
visited[N] = True

while True:
    idx = queue.popleft()

    if idx == K:
        print(position[K])
        break

    if idx*2 < 100001 and not visited[idx*2]:
        queue.append(idx*2)
        position[idx*2] = position[idx] + 1
        visited[idx*2] = True
    if idx+1 < 100001 and not visited[idx+1]:
        queue.append(idx+1)
        position[idx+1] = position[idx] + 1
        visited[idx+1] = True
    if idx - 1 > -1 and not visited[idx-1]:
        queue.append(idx-1)
        position[idx-1] = position[idx] + 1
        visited[idx-1] = True
