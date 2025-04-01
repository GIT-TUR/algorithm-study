## 문제

There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

### 문제 링크

https://leetcode.com/problems/keys-and-rooms/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

> BFS를 활용했습니다.

0번 방에 들어있는 key들을 queue에 넣고, 큐에 들어있는 key를 활용해 해당하는 인덱스의 방을 방문하도록 했습니다. 각 방마다 방문 기록을 기록하고, 만약 queue 속 열쇠를 모두 사용했는데 방문하지 못한 방이 존재하면 false를 출력하도록 했습니다.
