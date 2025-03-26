import sys
input = sys.stdin.readline

N, M = map(int,input().split())
S = []
test = []

for _ in range(N):
    S.append(input().strip())
for _ in range(M):
    test.append(input().strip())
S.sort()

result = 0

def check(s, t):
    min_len = min(len(s), len(t))  # 둘 중 짧은 길이까지만 비교
    for i in range(min_len):
        if s[i] < t[i]:
            return 1
        elif s[i] > t[i]:
            return -1
    return 0  # 여기까지 오면 접두사인지 확인이 필요

for t in test:
    left = 0
    right = len(S) - 1

    while left <= right:
        middle = (left + right) // 2

        state = check(S[middle], t)

        if state == 0:
            result += 1
            break

        elif state == 1:
            left = middle + 1
        else:
            right = middle - 1


print(result)