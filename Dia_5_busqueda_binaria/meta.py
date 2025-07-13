n = int(input())
totalTime = 0
exerciseCount = 0

minimumTimes = []
for _ in range(n):
    ex, f, s, t = map(str, input().split())
    time = [int(f), int(s), int(t)]
    time = [ti for ti in time if ti >= 0]
    if time:
        minimumTimes.append(min(time))

minimumTimes.sort()
for i in minimumTimes:
    if totalTime + i <= 300:
        totalTime += i
        exerciseCount += 1
    else:
        break
print(exerciseCount)
