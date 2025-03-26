import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**7)

n, m = map(int,input().split())
in_number = []
if m != 0:
    in_number = list(map(int, input().split(' ')))

def backtracking(numbers):
    global result
    if len(numbers) == n:
        # for문이 정상적으로 끝난 경우에만 else문 실행됨
        # 만약 break가 한 번이라도 실행되면 else문 건너뜀
        for p in in_number:
            if p not in numbers:
                break
        else:
            result += 1
        return

    for i in range(10):
        numbers.append(i)
        backtracking(numbers)
        numbers.pop()

result = 0

numbers = []
backtracking(numbers)

print(result)