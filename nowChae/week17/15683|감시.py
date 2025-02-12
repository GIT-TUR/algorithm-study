import sys
import copy

input = sys.stdin.readline

N, M = map(int, input().split())
office = [list(map(int, input().split())) for _ in range(N)]

# CCTV 종류별 감시 방향 (동, 남, 서, 북)
cctv_directions = {
    1: [[0, 1], [1, 0], [0, -1], [-1, 0]],
    2: [[0, 1, 0, -1], [1, 0, -1, 0]],   
    3: [[-1, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, -1], [0, -1, -1, 0]], 
    4: [[-1, 0, 0, 1, 0, -1], [0, 1, 1, 0, -1, 0], 
        [1, 0, 0, -1, 0, 1], [0, -1, -1, 0, 1, 0]], 
    5: [[-1, 0, 0, 1, 1, 0, 0, -1]] 
}

cctvs = []
min_blind_spots = float('inf')

# CCTV 위치 저장
for i in range(N):
    for j in range(M):
        if 1 <= office[i][j] <= 5:
            cctvs.append((office[i][j], i, j))

def monitor(temp_office, directions, x, y):
    for d in range(0, len(directions), 2):
        dx, dy = directions[d], directions[d + 1]
        nx, ny = x, y
        while True:
            nx += dx
            ny += dy
            if 0 <= nx < N and 0 <= ny < M:
                if temp_office[nx][ny] == 6: 
                    break
                if temp_office[nx][ny] == 0: 
                    temp_office[nx][ny] = '#'
            else:
                break

# 백트래킹
def dfs(depth, office_copy):
    global min_blind_spots

    if depth == len(cctvs): 
        count = sum(row.count(0) for row in office_copy)
        min_blind_spots = min(min_blind_spots, count)
        return

    cctv_num, x, y = cctvs[depth]

    for directions in cctv_directions[cctv_num]:  # 가능한 모든 방향 탐색
        temp_office = copy.deepcopy(office_copy)
        monitor(temp_office, directions, x, y)
        dfs(depth + 1, temp_office)

dfs(0, office)
print(min_blind_spots)
