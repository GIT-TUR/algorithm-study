k = int(input())
n = 1
while n < k:
    n *= 2
    bi = bin(k)[2:]
    ones = bi.count("1")
    cnt = max(0, ones - 1)

    if n == k:
        s = 0
    else:
        bi2 = bin(n - k)[2:]
        s = bi2.count("1")

print(n, cnt + s)
