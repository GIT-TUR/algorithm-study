import sys
input = sys.stdin.readline

N = int(input())
fruits = list(map(int, input().split()))

start, end = 0, 0
kind = {}
max_length = 0

while end < N:
    if fruits[end] in kind:
        kind[fruits[end]] += 1
    else:
        kind[fruits[end]] = 1

    end += 1

    while len(kind) > 2:
        kind[fruits[start]] -= 1
        if kind[fruits[start]] == 0:
            del kind[fruits[start]]
        start += 1

    max_length = max(max_length, end - start)

print(max_length)
