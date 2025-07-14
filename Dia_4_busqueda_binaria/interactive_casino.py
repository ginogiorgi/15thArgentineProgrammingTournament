n = int(input())
for _ in range(n + 1):
    line = input()
    if line == "WIN" or line == "LOSE":
        exit()
    _, m, b = line.split()
    m = int(m)
    b = int(b)
    if b <= m // 10:
        print("PLAY", flush=True)
    else:
        print("SKIP", flush=True)
