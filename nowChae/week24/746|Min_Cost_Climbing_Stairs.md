## 문제

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

### 문제 링크

https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

> dp를 사용해 풀었습니다.

dp 테이블에 해당 인덱스까지의 최소 선택 cost를 저장하도록 했습니다. 연속으로 cost를 선택한 경우와 2칸을 넘어 선택하는 경우 각각에 cost[i]를 더한 값 중 더 작은 값을 dp에 저장하도록 했습니다.

++ 마지막에서 두번째 cost를 선택하고 마지막 cost를 선택하지 않고 바로 마지막으로 도착할 수도 있기 때문에 cost에 0을 추가해준 후 dp 테이블을 구해주었습니다.
