## 문제

[7](https://leetcode.com/problems/reverse-integer/)

## 해결 방법

- long을 사용하지 않고 int를 뒤집어야하는데
- 다음과 같은 예외 사항을 고려해야한다.
- 1. INT의 최대값을 초과하는 경우
- 이때 초과하는지 체크하는 로직을 작성해야한다.
- 그런데 음수인 경우 -2^31까지 사용할 수 있는 반면 양수는 2^31-1까지 사용할 수 있다. (2의 보수 참고)
- 여기서 음수인 경우와 양수인 경우를 잘 나눠서 처리해야하는데

```cpp
    bool check(int x, int mul){
        int mx = INT_MAX;
        if(x < 0){
            mx *= -1;
            mx -= 1;
        }
        while(mul){
            int cmpA = mx/mul;
            int cmpB = x%10;
            if(cmpA > 0){
                if(cmpA < cmpB) return false;
                else if(cmpA > cmpB) return true;
            }else{
                if(cmpA > cmpB) return false;
                else if(cmpA < cmpB) return true;
            }
            mx-= cmpA*mul;
            mul/=10;
            x/=10;
        }
        return true;
    }
```

이것이 검증함수가 된다.

1. 양수와 음수에 따라 부호가 반대.
2. 더 작은 경우 그 즉시 종료
3. 같은 경우 계속 진행

```cpp
    int getSize(int x){
        int size = 0;
        int temp = x;
        while(temp){
            size++;
            temp/=10;
        }
        return size;
    }
        while(x){
            y += (x%10)*mul;
            mul/= 10;
            x/=10;
        }
        return y;
```

식을 구하는 것 자체는 자리수만큼 덧셈을 반복하면 되어서 꽤 간단하지만 예외처리가 까다롭다
