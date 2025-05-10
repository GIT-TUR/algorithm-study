import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split(' ')))
x = int(input())

nums.sort()

result = 0
start = 0
end = n - 1

while start < end:
    if nums[start] + nums[end] == x:
        result += 1
        start += 1
        end -= 1
    elif nums[start] + nums[end] < x:
        start += 1
    else:
        end -= 1

print(result)