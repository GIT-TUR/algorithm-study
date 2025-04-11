from collections import deque

K, M = map(int, input().split(' '))
things = [list(map(int, input().split(' '))) for _ in range(5)]
wall = list(map(int, input().split(' ')))


# 탐사 진행
# 3X3 격자 선택 - 90, 180, 270 선택 회전

# 회전 함수
# 중심, 회전별 결과 리턴 필요함
# 회전 후 가치 획득을 계산하는 것 필요
# max 가치를 찾는 순간이 필요함

# 각도 회전별로 함수 만들기 - O
# 초기 유물 상태, 중심 좌표 입력받기 -
def spin_90(things, r, c):
    new_things = [arr[:] for arr in things]
    new_things[r - 1][c - 1] = things[r + 1][c - 1]
    new_things[r - 1][c] = things[r][c - 1]
    new_things[r - 1][c + 1] = things[r - 1][c - 1]

    new_things[r][c - 1] = things[r + 1][c]
    new_things[r][c + 1] = things[r - 1][c]

    new_things[r + 1][c - 1] = things[r + 1][c + 1]
    new_things[r + 1][c] = things[r][c + 1]
    new_things[r + 1][c + 1] = things[r - 1][c + 1]

    return new_things


def spin_180(things, r, c):
    new_things = [arr[:] for arr in things]
    new_things[r - 1][c - 1] = things[r + 1][c + 1]
    new_things[r - 1][c] = things[r + 1][c]
    new_things[r - 1][c + 1] = things[r + 1][c - 1]

    new_things[r][c - 1] = things[r][c + 1]
    new_things[r][c + 1] = things[r][c - 1]

    new_things[r + 1][c - 1] = things[r - 1][c + 1]
    new_things[r + 1][c] = things[r - 1][c]
    new_things[r + 1][c + 1] = things[r - 1][c - 1]

    return new_things


def spin_270(things, r, c):
    new_things = [arr[:] for arr in things]
    new_things[r - 1][c - 1] = things[r - 1][c + 1]
    new_things[r - 1][c] = things[r][c + 1]
    new_things[r - 1][c + 1] = things[r + 1][c + 1]

    new_things[r][c - 1] = things[r - 1][c]
    new_things[r][c + 1] = things[r + 1][c]

    new_things[r + 1][c - 1] = things[r - 1][c - 1]
    new_things[r + 1][c] = things[r][c - 1]
    new_things[r + 1][c + 1] = things[r + 1][c - 1]

    return new_things


# 범위 탐색
def range_state(i, j):
    if 0 <= i and i < 5 and 0 <= j and j < 5:
        return True
    return False


# 동서남북
DX = [0, 0, 1, -1]
DY = [1, -1, 0, 0]


# bfs로 개수 세면서 가치 계산하기
def cal_value(things):
    visited = [[False] * 5 for _ in range(5)]
    total_value = 0

    for i in range(5):
        for j in range(5):
            cnt_list = [(i, j)]

            if not visited[i][j]:
                queue = deque([(i, j)])
                visited[i][j] = True
                number = things[i][j]

                while queue:
                    cur_r, cur_c = queue.popleft()

                    for k in range(4):
                        new_r = cur_r + DX[k]
                        new_c = cur_c + DY[k]
                        if (range_state(new_r, new_c)) and (not visited[new_r][new_c]) and (
                                things[new_r][new_c] == number):
                            queue.append((new_r, new_c))
                            visited[new_r][new_c] = True
                            cnt_list.append((new_r, new_c))

                if len(cnt_list) >= 3:
                    total_value += len(cnt_list)

                    for node in cnt_list:
                        things[node[0]][node[1]] = 0

    return (total_value, things)


# 중심과 각도 반복을 돌면서 max 값일때의 상태 사용하기
# 회전 후 가치 계산해서 나온 가치 값이 클 때마다 값을 갱신하고 저장해두는데,
# 그때의 그래프 상태도 저장해두어야 함
# 그 그래프를 바탕으로 연쇄획득 계산해야함

# max 가치 찾는 순서는 우선 max 가치가 발생하면 그 상황으로 갱신이 1순위
# 회전 각도를 먼저 판단해서 계산해보고
# 열 보고
# 행 보고
# 90도 부터 반영하는데, 열 작은 것 부터 찾아야 하니까 (열이 작은 것부터 (j 값을 기준으로 반복문 해보기))

# 격자 선택 후 1차 유물 획득 함수
def start(things):
    max_value = 0
    after_things = things

    for j in range(1, 4):
        for i in range(1, 4):
            spin_things = spin_90(things, i, j)
            value, spin_things = cal_value(spin_things)
            if value > max_value:
                max_value = value
                after_things = spin_things

    for j in range(1, 4):
        for i in range(1, 4):
            spin_things = spin_180(things, i, j)
            value, spin_things = cal_value(spin_things)
            if value > max_value:
                max_value = value
                after_things = spin_things

    for j in range(1, 4):
        for i in range(1, 4):
            spin_things = spin_270(things, i, j)
            value, spin_things = cal_value(spin_things)
            if value > max_value:
                max_value = value
                after_things = spin_things

    return (max_value, after_things)


def fill_thing(things, w_idx):
    for j in range(5):
        for i in range(4, -1, -1):
            if things[i][j] == 0:
                things[i][j] = wall[w_idx]
                w_idx += 1
    return (w_idx, things)


def turn(things, w_idx):
    total_value, things = start(things)
    w_idx, things = fill_thing(things, w_idx)

    while True:
        value, things = cal_value(things)
        if value == 0:
            break
        w_idx, things = fill_thing(things, w_idx)
        total_value += value


    return (total_value, w_idx, things)


w_idx = 0

for _ in range(K):
    rst, w_idx, things = turn(things, w_idx)

    if rst > 0:
        print(rst, end=' ')
    else:
        break

# 반복이 완전히 끝나면 가치와 유물이 빠진 그래프(0으로 표현된)를 얻을 수 있으니
# 이제 0인 곳에 유물을 채워주는 함수가 필요함

# 가치 게산 함수 재사용
# 채워주는 함수 재사용
# 리턴하는 유물 가치가 0일 경우 끝냄


# 회전 목표
# 1차 획득 가치 최대화
# 회전 각도가 가장 작은 방법
# 중심 좌표가 작은 구간 ( 열 -> 행 )

# 유물 1차 획득
# 상하좌우 인접 같은 유물 연결 - 3개 이상 연결 시
# 유물의 가치를 모두 모아서 조각의 개수가 가치가 됨


# 벽면에 적혀잇는 순서대로 조각 생김
# 열 번호가 작은 순으로 조각 생겨남
# 행 번호가 큰 순서대로 조각 생겨남
# 사용한 숫자는 다시 사용 불가능  - 기록을 해야할 듯

# 유물 연쇄 획득
# 유물이 연결되어 위의 작업을 반복하다가
# 연결되지 않을 때까지 반복

# K 번의 턴에 걸쳐 유물의 가치 총합을 출력하는 프로그램 만들기
# 획득한 유물 가치의 총합을 공백 사이에 두고 출력

