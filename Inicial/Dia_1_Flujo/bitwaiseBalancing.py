"""Dado tres enteros no negativos b, c y d, encontrar un entero no negativo a ∈ [0, 2^61] tal que:
    (a | b) - (a & c) = d
Donde | es el OR bit a bit y & es el AND bit a bit.

Si existe tal a, imprimir su valor. Si no hay solución, imprimir -1. Si hay múltiples soluciones, imprimir cualquiera de ellas.

Entrada:
- La primera línea contiene el número de casos de prueba t (1 ≤ t ≤ 10^5).
- Cada caso de prueba consiste en una línea con tres enteros b, c y d (0 ≤ b, c, d ≤ 10^18).

Salida:
- Para cada caso de prueba, imprimir el valor de a, o -1 si no existe solución.

Ejemplo:
Entrada:
3
2 2 2
4 2 6
10 2 14

Salida:
0
-1
12"""


def solve():
    import sys

    input = sys.stdin.readline
    t = int(input())
    for _ in range(t):
        b, c, d = map(int, input().split())
        a = 0
        possible = True
        for i in range(61):
            b_i = (b >> i) & 1
            c_i = (c >> i) & 1
            d_i = (d >> i) & 1

            ok0 = ((0 | b_i) - (0 & c_i)) == d_i
            ok1 = ((1 | b_i) - (1 & c_i)) == d_i
            if ok0:

                pass
            elif ok1:
                a |= 1 << i
            else:
                possible = False
                break
        if possible and a <= (1 << 61):
            print(a)
        else:
            print(-1)


if __name__ == "__main__":
    solve()
