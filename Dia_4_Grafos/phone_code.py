t = int(input())
firstNumber = input()
secondNumber = input()
prefix = ""
numbersLength = len(firstNumber)

for i in range(numbersLength):
    if firstNumber[i] == secondNumber[i]:
        prefix += firstNumber[i]
    else:
        break

prefixLen = len(prefix)

if t <= 2:
    print(prefixLen)
    exit()

for k in range(t - 2):
    if prefixLen == 0:
        print(0)
        exit()
    nNumber = input()
    for j in range(prefixLen):
        if prefix[j] != nNumber[j]:
            prefix = prefix[:j]
            prefixLen = len(prefix)
            break
print(prefixLen)
