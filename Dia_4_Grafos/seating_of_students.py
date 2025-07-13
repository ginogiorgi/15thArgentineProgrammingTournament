rows, columns = map(int, input().split())
evens = 2
odds = rows * columns
pivot = True
iterater = True
result = []

if odds % 2 == 0:
    odds -= 1

for i in range(rows):
    pivot = not pivot
    arrEvens = [x for x in range(evens, evens + columns) if x % 2 == 0]
    arrOdds = [x for x in range(odds, odds - columns, -1) if x % 2 != 0]
    evens += columns
    odds -= columns
    for j in range(columns if columns % 2 == 0 else columns + 1):
        iterater = not iterater
        if iterater:
            if pivot:
                print(j)
                result.append(arrEvens[0 + (j // 2)])
            else:
                print(j)
                result.append(arrEvens[-1 - (j // 2)])
        else:
            if pivot:
                print(j)
                result.append(arrOdds[0 - (j // 2)])
            else:
                print(j)
                result.append(arrOdds[-1 + (j // 2)])

print("YES")

for i in range(rows):
    resultRow = result[columns * i : columns * i + columns]
    print(" ".join(map(str, resultRow)))
