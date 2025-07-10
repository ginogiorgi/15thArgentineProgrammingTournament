t = int(input())
for _ in range(t):
    n, s = map(int, input().split())
    k = s // (n * n)
    print(k)
