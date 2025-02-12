import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int,input().split(' '))

roadmap = []

visited = [[0]*m for _ in range(n)]
result = [[-1]*m for _ in range(n)]

def bfs(x, y):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, 1, -1]

    queue = deque([(x,y)])

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0:
                if roadmap[nx][ny] == 0:
                    visited[nx][ny] = 1
                    result[nx][ny] = 0
                elif roadmap[nx][ny] == 1:
                    visited[nx][ny] = 1
                    result[nx][ny] = result[x][y] + 1
                    queue.append((nx, ny))
            
    return 

des_x, des_y = 0, 0

for i in range(n):
    roadmap.append(list(map(int, input().split(' '))))

    if 2 in roadmap[i]:
        des_x = i
        des_y = roadmap[i].index(2)
        result[des_x][des_y] = 0
        visited[des_x][des_y] = 1

bfs(des_x, des_y)

for i in range(n):
    for j in range(m):
        if roadmap[i][j] == 0:
            print(0, end=' ')
        else:
            print(result[i][j], end=' ')
    print()