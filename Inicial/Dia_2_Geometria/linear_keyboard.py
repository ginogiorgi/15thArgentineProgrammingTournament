t = int(input())

for _ in range(t):
    keyboard = str(input())
    word = str(input())
    totalTime = 0
    if len(word) == 1:
        print(0)
    else:
        for i in range(len(word) - 1):
            totalTime += abs(keyboard.find(word[i]) - keyboard.find(word[i + 1]))
        print(totalTime)
