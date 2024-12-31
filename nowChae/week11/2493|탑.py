import sys
input = sys.stdin.readline

N = int(input())
tops = list(map(int, input().split(' ')))

stack = [(0,0), (tops[0], 1)]
result = [0]

for i in range(1,N):
    while stack:
        while stack[-1][0] <= tops[i] and stack[-1][0] != 0:
            stack.pop()
        stack.append((tops[i], i+1))   
        result.append(stack[-2][1])
        break
print(*result)