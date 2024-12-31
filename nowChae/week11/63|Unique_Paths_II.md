## 문제

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 \* 109.

### 문제 링크

https://leetcode.com/problems/unique-paths-ii/description/?envType=study-plan-v2&envId=top-interview-150

---

## 해결 방법

> dp 문제로 규칙을 찾아서 풀 수 있었다.

x,y 좌표에 이동하는 방법의 수는 x-1,y 좌표로 오는 방법과 x,y-1 좌표로 오는 방법의 수를 더해서 구할 수 있었다.

x 또는 y 좌표가 0 일 때 세팅을 해주고 그 이후는 규칙을 통해 방법의 수를 구할 수 있었다.
