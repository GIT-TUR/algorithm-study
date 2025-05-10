import sys
input = sys.stdin.readline

K = int(input())

rst1 = 1
rst2 = 0

while K > rst1:
    rst1 *= 2

if rst1 == K:
    print(rst1, rst2)
else:
    choco = 0
    tmp = rst1
    while choco != K:
        tmp //= 2
        rst2 += 1
        if choco + tmp > K:
            continue
        else:
            choco += tmp
    
    print(rst1, rst2)