import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))
cnt = 0


def check(known, num):
    for i in num:
        if i not in known:
            return False
    return True


def dfs(num, depth):
    global cnt
    if depth == n:
        if check(num, arr):
            cnt += 1
        return

    for i in range(10):
        num.append(i)
        dfs(num, depth + 1)
        num.pop()


dfs([], 0)
print(cnt)
