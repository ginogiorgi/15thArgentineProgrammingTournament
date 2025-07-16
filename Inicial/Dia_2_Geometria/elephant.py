n = int(input())
count = 0
while n != 0:
    count += 1
    if n >= 5:
        n -= 5
    else:
        n -= n % 5

print(count)
