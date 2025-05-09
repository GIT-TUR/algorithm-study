from collections import deque

s = int(input())


def bfs(s):
    q = deque([(1, 0, 0)])
    visited = set([(1, 0)])
    while q:
        screen, clipboard, time = q.popleft()
        if screen == s:
            return time
        next = (screen, screen)
        if next not in visited:
            q.append((screen, screen, time + 1))
            visited.add(next)
        if clipboard > 0:
            next = (screen + clipboard, clipboard)
            if next not in visited:
                q.append((screen + clipboard, clipboard, time + 1))
                visited.add(next)
        if screen > 0:
            next = (screen - 1, clipboard)
            if next not in visited:
                q.append((screen - 1, clipboard, time + 1))
                visited.add(next)


print(bfs(s))
