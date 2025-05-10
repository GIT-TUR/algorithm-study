import sys
input = sys.stdin.readline
from collections import deque


S = int(input())

visited = [[False] * (S + 1) for _ in range(S + 1)]
visited[1][0] = True


queue = deque([(1, 0, 0)])
while queue:
    screen, clip, time = queue.popleft()

    if screen == S:
        print(time)
        break

    if screen < S:
        
        if screen != clip and not visited[screen][screen]:
            visited[screen][screen] = True  
            queue.append((screen, screen, time + 1))
        
        if clip !=0 and screen + clip <= S and not visited[screen + clip][clip]:
            visited[screen + clip][clip] = True 
            queue.append((screen + clip, clip, time + 1))
    
    if screen > 0 and not visited[screen - 1][clip]:
        visited[screen - 1][clip] = True    
        queue.append((screen - 1, clip, time + 1))  

