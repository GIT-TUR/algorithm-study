from collections import deque


class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)
        visited[0] = True
        dq = deque([0])
        while dq:
            next = dq.popleft()
            for i in rooms[next]:
                if visited[i]:
                    continue
                dq.append(i)
                visited[i] = True
        return all(visited)
