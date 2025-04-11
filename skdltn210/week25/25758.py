from collections import Counter

n = int(input())
genes = input().split()

first = []
second = []

for g in genes:
    first.append(g[0])
    second.append(g[1])

s = set()

counter = Counter(second)

for i in range(n):
    counter[second[i]] -= 1

    for b in counter:
        if counter[b] > 0:
            s.add(max(first[i], b))

    counter[second[i]] += 1

result = sorted(s)
print(len(result))
print(" ".join(result))
