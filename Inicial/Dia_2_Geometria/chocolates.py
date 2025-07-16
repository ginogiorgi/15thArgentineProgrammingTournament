n = int(input())
arr = list(map(int, input().split()))
result = arr[-1]
totalResult = arr[-1]
for chocolates in range(n - 2, -1, -1):
    # La cantidad máxima que puedo tomar de este tipo es como mucho uno menos que la anterior
    result = min(arr[chocolates], result - 1)
    if result < 0:
        result = 0
    totalResult += result

print(totalResult)
