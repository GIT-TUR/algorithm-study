## 문제

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

### 문제 링크

https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

포인트들을 얻은 기록들을 모두 저장해두는 리스트를 만들었습니다.
gain에 있는 값들을 순차적으로 반복하면서 points 리스트에 들어있는 가장 마지막 값에 현재 gain값을 더해 points 리스트에 추가해줍니다.

마지막으로 points 중 max 값을 출력하도록 했습니다.
