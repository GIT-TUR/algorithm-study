## 문제

[394](https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- Stack의 중첩 구조를 생각한다.
- 1차 중첩: 숫자가 나오면 괄호가 등장한다.
- 2차 중첩: 괄호
- 3차 중첩: 문자열
- 이때 무엇이 push되고 pop되는지 고민하면 해결할 수 있다.
