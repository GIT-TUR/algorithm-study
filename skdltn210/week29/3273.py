n = int(input())
arr = list(map(int, input().split(" ")))
x = int(input())
arr.sort()
cnt = 0
left = 0
right = len(arr) - 1
while left < right:
    sum = arr[left] + arr[right]
    if sum == x:
        cnt += 1
        left += 1
        right -= 1
    elif sum > x:
        right -= 1
    else:
        left += 1

print(cnt)
