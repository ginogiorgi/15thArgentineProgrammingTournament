a, b, m, r0 = map(int, input().split())
seen = {}
val = r0
idx = 0
while val not in seen:
    seen[val] = idx
    idx += 1
    val = (a * val + b) % m
preperiod = seen[val]
period = idx - preperiod
print(period)