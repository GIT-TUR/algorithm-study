## 문제

[374](https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- 간단한 이분탐색 구현 문제입니다.
- 다만 주어진 값이 2^32-1 이므로 target을 구하는 구간에서 overflow가 발생할 수 있어서 유의해야합니다.
