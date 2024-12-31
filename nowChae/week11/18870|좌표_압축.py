import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int,input().split(' ')))


arr_list = list(set(arr))
sorted_list =sorted(arr_list)

dictionary = {sorted_list[i]: i for i in range(len(sorted_list))}

for a in arr:
    print(dictionary[a], end=' ') 