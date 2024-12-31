import sys
input = sys.stdin.readline

N, M = map(int,input().split(' '))
tree = list(map(int,input().split(' ')))

result = 0 

left = 0
right = max(tree)

while left < right:
    middle = (left + right) // 2

    tree_sum = sum((t - middle) for t in tree if t > middle)

    if tree_sum == M:
        result = middle
        break
    elif tree_sum < M:
        right = middle
    else:
        result = middle
        left = middle + 1

print(result)