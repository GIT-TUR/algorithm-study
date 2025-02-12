import sys
input = sys.stdin.readline
from collections import deque

N, M, K, X = map(int,input().split(' '))

graph = [[] for _ in range(N+1)]
visited = [False]*(N+1)

result = []

for _ in range(M):
    a, b = map(int, input().split(' '))
    graph[a].append(b)

queue = deque([(X,0)])
visited[X] = True

while queue:
    node, cnt = queue.popleft()

    if cnt == K:
        result.append(node)

    for n in graph[node]:
        if not visited[n]:
            queue.append((n, cnt + 1))
            visited[n] = True

if result:
    for r in sorted(result):
        print(r)
else:
    print(-1)
