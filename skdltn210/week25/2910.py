[n, c] = map(int, input().split(" "))
arr = list(map(int, input().split(" ")))
map = {}
for i in arr:
    if i not in map:
        map[i] = 1
    else:
        map[i] += 1
sorted_items = sorted(map.items(), key=lambda x: x[1], reverse=True)
ans = []
for key, value in sorted_items:
    for i in range(value):
        ans.append(str(key))
print(" ".join(ans))
