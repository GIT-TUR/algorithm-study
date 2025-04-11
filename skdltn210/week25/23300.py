from collections import deque

[n, q] = map(int, input().split())
backward = deque()
forward = deque()

current = ""
for i in range(q):
    arr = list(input().split())
    if arr[0] == "B" and len(backward) > 0:
        forward.appendleft(current)
        current = backward.pop()
    elif arr[0] == "F" and len(forward) > 0:
        backward.append(current)
        current = forward.popleft()
    elif arr[0] == "A":
        forward = deque()
        if not current == "":
            backward.append(current)
        current = arr[1]
    elif arr[0] == "C":
        if len(backward) < 2:
            continue
        tmp = deque()
        idx = 1
        x = backward[0]
        while idx < len(backward):
            if x == backward[idx]:
                idx += 1
            else:
                tmp.append(x)
                x = backward[idx]
                idx += 1
        tmp.append(x)
        backward = tmp

print(current)
print(" ".join(reversed(backward))) if backward else print(-1)
print(" ".join(forward)) if forward else print(-1)
