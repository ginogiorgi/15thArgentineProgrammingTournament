n = int(input())

for _ in range(n):
    tupla = list(map(int, input().split()))
    divisible = 1
    xi = tupla[0]
    while tupla[0]%divisible == 0:
        divisible += 1
    divisible -= 1
    while xi%tupla[1] == 0 or tupla[0]%xi != 0:
        xi -= divisible
    print(xi)
         

