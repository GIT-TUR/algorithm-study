from collections import deque

class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)

        pick = deque(rooms[0])
        visited[0] = True

        while pick:
            key = pick.popleft()
            visited[key] = True

            for k in rooms[key]:
                if not visited[k]:
                    pick.append(k)
 
        state = True
        if False in visited:
            state = False
            
        return state
        