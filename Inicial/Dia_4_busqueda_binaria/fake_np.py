l, r = map(int, input().split())

factores = {}

for e in range(l, r + 1, 1):
    d = 2
    n = e
    while d * d <= n:
        while n % d == 0:
            if d in factores:
                factores[d] += 1
            else:
                factores[d] = 1
            n //= d
        d += 1
    if n > 1:
        if n in factores:
            factores[n] += 1
        else:
            factores[n] = 1


clave_max = max(factores, key=factores.get)
print(clave_max)
print(factores)
