from collections import deque
import sys

input = sys.stdin.readline

m, n, h = map(int, input().split())

box = [[list(map(int, input().split())) for _ in range(n)] for _ in range(h)]

dx = [0, 0, 0, 0, 1, -1]  
dy = [0, 0, 1, -1, 0, 0] 
dz = [1, -1, 0, 0, 0, 0]  

def solution():
    if not any(0 in layer for box_layer in box for layer in box_layer):
        print(0)
        return

    visited = [[[False] * m for _ in range(n)] for _ in range(h)]
    
    def bfs():
        queue = deque()
        for i in range(h):
            for j in range(n):
                for k in range(m):
                    if box[i][j][k] == 1:
                        queue.append((i, j, k))
                        visited[i][j][k] = True
        
        cnt = -1 
        while queue:
            cnt += 1
            for _ in range(len(queue)):
                z, y, x = queue.popleft()
                
                for i in range(6):
                    nx = x + dx[i]
                    ny = y + dy[i]
                    nz = z + dz[i]
                    
                    if (0 <= nx < m and 0 <= ny < n and 0 <= nz < h and
                        not visited[nz][ny][nx] and box[nz][ny][nx] == 0):
                        visited[nz][ny][nx] = True
                        box[nz][ny][nx] = 1
                        queue.append((nz, ny, nx))
        
        return cnt

    days = bfs()
    
    if any(0 in layer for box_layer in box for layer in box_layer):
        print(-1)
    else:
        print(days)

solution()