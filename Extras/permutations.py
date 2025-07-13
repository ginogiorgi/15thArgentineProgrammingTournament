n = int(input())
arr = []

if 1 < n <= 3:
    print("NO SOLUTION")
else:
    for i in range(2, n + 1, 2):
        arr.append(i)
    for j in range(1, n + 1, 2):
        arr.append(j)
print(" ".join(map(str, arr)))
