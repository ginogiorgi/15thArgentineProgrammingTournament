t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    count = 0 
    i = 0
    
    while i < n - 1:
        if a[i] > a[i+1]:
            value = a[i+1]
            a.pop(i+1)
            insert_pos = 0
            for k in range(i, -1, -1):
                if a[k] <= value:
                    insert_pos = k + 1
                    break
            a.insert(insert_pos, value)
            count += 1
        else:
            i += 1
    print(count)
    

