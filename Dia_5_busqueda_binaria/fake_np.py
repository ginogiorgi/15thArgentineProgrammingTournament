l, r = map(int, input().split())
if l == r:
    print(l)
else:
    max_count = 0
    result = 2
    for d in range(2, r + 1):
        count = r // d - (l - 1) // d
        if count > max_count:
            max_count = count
            result = d
        if max_count == r - l + 1:
            break
    print(result)
