## 문제

[735](https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- 순회하는 동안 양수인 경우 stack에 넣고
- 음수라면 조건을 나눠서 생각해볼 수 있습니다.
- stack이 비어있는 경우 정답 list에 추가
- stack이 비어있지 않은 경우 x의 절대값과 비교해서 작다면 계속 pop을 반복합니다.
- 작지 않을 경우 while문을 나와서 다시 2가지 경우를 고민해봅니다.
- stack이 비어있는 경우 정답 list에 추가합니다.
- stack이 비어있지 않으면서 `절대값과 값이 같을 경우` stack pop합니다
- 최종적으로 stack의 값이 남아있거나 남아있지 않은 경우를 다시 고려할 수 있는데 stack은 LIFO 이므로 임시 list를 만들어서 값을 집어넣은 다음 list의 순서를 반전하고 뒤집은 순서 그대로 정답 list에 값을 넣으면 됩니다.
- 결국 이 문제는 stack의 특성을 잘 이용하여 푸는 문제가 되겠습니다.
