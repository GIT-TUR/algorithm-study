n, m = map(int, input().split())
s = []
cnt = 0

def isPrefix(t, s):
    return s.startswith(t)

for i in range(n):
    s.append(input())

s.sort()

for i in range(m):
    t = input()
    left = 0
    right = n - 1
    found = False
    
    while left <= right:
        mid = (left + right) // 2
        
        if isPrefix(t, s[mid]):
            found = True
            break
        
        elif t < s[mid]:
            right = mid - 1
        else:
            left = mid + 1
    
    if found:
        cnt += 1

print(cnt)