from collections import deque

L, N, Q = map(int, input().split(' '))
board = [list(map(int, input().split(' '))) for _ in range(L)]
worriors = [list(map(int, input().split(' '))) for _ in range(N)]
command = [list(map(int, input().split(' '))) for _ in range(Q)]

damages = [0 for _ in range(len(worriors))]
deleted = set()


# worrior들의 위치 board

def replace_worrior():
    w_board = [[0] * L for _ in range(L)]
    for k, w in enumerate(worriors):
        if worriors[k][4] > 0:
            for i in range(w[0], w[0] + w[2]):
                for j in range(w[1], w[1] + w[3]):
                    w_board[i - 1][j - 1] = k + 1
    return w_board


worrior_board = replace_worrior()

# 위 오른쪽 아래 왼쪽
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


# 이동 가능 여부 판단 함수

# 해당 전사의 모든 값 리턴
def worrior_position(worrior):
    result = []
    start_r, start_c = worriors[worrior][0], worriors[worrior][1]
    h, w = worriors[worrior][2], worriors[worrior][3]
    end_r = start_r + h
    end_c = start_c + w

    for i in range(start_r, end_r):
        for j in range(start_c, end_c):
            result.append((i - 1, j - 1))
    return result


# True False로 리턴
# 만약 True 인 경우에 실제로 이동하고
def movable(worrior, direction):
    selected_worrior = {worrior}
    # 벽에 부딪히면 이동 불가능
    # 다른 전사랑 부딪히면 그 전사도 이동
    queue = deque(worrior_position(worrior))

    while queue:
        cur_r, cur_c = queue.popleft()

        new_r = cur_r + dx[direction]
        new_c = cur_c + dy[direction]

        if 0 <= new_r and new_r < L and 0 <= new_c and new_c < L and board[new_r][new_c] != 2:
            worrior_num = worrior_board[new_r][new_c] - 1
            if worrior_num > -1 and worrior_num not in selected_worrior:
                new_worrior_position = worrior_position(worrior_num)
                selected_worrior.add(worrior_num)
                for p in new_worrior_position:
                    queue.append(p)
        else:
            return (False, {})

    return (True, selected_worrior)


# 실제 이동
# 이동이 가능한 경우에만 이동 - 대미지도 이때만 입음
def move(selected, direction):
    for s in selected:
        worriors[s][0] += dx[direction]
        worriors[s][1] += dy[direction]
    w_board = replace_worrior()
    return w_board


# 대미지 계산
# 밀린 전사만 대미지 입음
def damage(selected, root):
    for s in selected:
        if s != root:
            positions = worrior_position(s)
            cnt = 0
            for p in positions:
                if board[p[0]][p[1]] == 1:
                    cnt += 1
            damages[s] += cnt
            worriors[s][4] -= cnt

            if worriors[s][4] <= 0:
                deleted.add(s)
                damages[s] = 0
                positions = worrior_position(s)
                for p in positions:
                    worrior_board[p[0]][p[1]] = 0


# 차례대로 명령 실행
for c in command:
    if c[0] - 1 not in deleted:
        movable_state, selected = movable(c[0] - 1, c[1])
        if movable_state:
            worrior_board = move(selected, c[1])
            damage(selected, c[0] - 1)

print(sum(damages))

