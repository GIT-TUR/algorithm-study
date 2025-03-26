import sys   
input = sys.stdin.readline

n, m = map(int, input().split())
string_dict = {} 
m_strings = []
for _ in range(n):
  string = input().rstrip()
  for i in range(len(string)):
    string_dict[string[0:i+1]] = 1
for _ in range(m):
  m_strings.append(input().rstrip()) 
 
count = 0

for word in m_strings:
  if word in string_dict:
    count += 1

print(count)