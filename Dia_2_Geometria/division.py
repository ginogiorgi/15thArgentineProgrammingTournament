n = int(input())

for _ in range(n):
    tupla = list(map(int, input().split()))
    a, b = tupla[0], tupla[1]
    divisible = 1
    while a % divisible == 0:
        divisible += 1
    divisible -= 1
    xi = a
    while xi % b == 0 or a % xi != 0:
        xi -= divisible
    print(xi)
