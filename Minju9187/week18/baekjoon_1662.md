# 문제

1662 | 압축
https://www.acmicpc.net/problem/1662

## 관련문제

리트코드 394번 Decode String 문제

## 문제 풀이

stack 문제

")"를 만났을 때 "("까지를 모두 처리하고 "(" 앞의 숫자를 곱해 문자열의 길이를 계산
처음에 순수하게 늘어난 문자열을 stack에 저장해 관리했는데 RangeError가 뜸
그래서 문자열의 길이를 저장해 관리

문자열 "3"과 3을 다르게 판단해서 사용하고 싶었는데 둘다 typeof가 number로 뜸,,
그래서 숫자는 앞에 \*를 붙여 따로 계산해줌
