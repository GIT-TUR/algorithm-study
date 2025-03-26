import sys   
input = sys.stdin.readline

n, m = map(int, input().split())
m_list = list(map(int, input().split()))
count = 0

def backtrack(index, current):
  global count
  if index == n:
    for m in m_list:
      if m not in current:
        return
    count += 1
    return
  
  for i in range(10):
    current.append(i)
    backtrack(index+1, current)
    current.pop()

backtrack(0, [])
print(count)