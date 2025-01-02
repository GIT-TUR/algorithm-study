## 문제

[841](https://leetcode.com/problems/keys-and-rooms/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- DFS 해결
- 0번 방을 기준으로 key를 가지고 다른 방을 탐색하고 그 다른 방에서 얻은 key를 기준으로 다시 다른 방을 탐색한다.
- 이러한 흐름은 DFS가 자연스럽다고 생각하여서 DFS로 해결
