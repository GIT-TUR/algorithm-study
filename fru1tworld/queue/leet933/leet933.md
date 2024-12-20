## 문제

[933](https://leetcode.com/problems/number-of-recent-calls/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- 최근 3000ms 이내 발생한 요청의 개수를 출력해야합니다.
- 3000을 초과하는 요청에 대해서는 제외하고 최근 3000 이내에 대해서 체크를 하면 되므로 queue를 사용하면 됩니다.
- queue가 성립하는 이유는 정렬되어있는 상태가 보장되어있으므로 queue에 가장 먼저 들어간 값이 가장 낮은 값이라는 것이 보장되므로 q의 front는 항상 작은 값이라 최근 3000초를 초과한 경우 q를 비워주면 됩니다.
