price, coin = map(int, input().split())
i = 1
while (price * i) % 10 != 0 and (price * i) % 10 != coin:
    i += 1
print(i)
