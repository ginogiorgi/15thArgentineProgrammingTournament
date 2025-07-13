n = int(input())
rooms = 0
estudiantes = []
for _ in range(n):
    estudiantes.append(input())

for i in range(7):
    timeSlot = 0
    for k in range(len(estudiantes)):
        timeSlot += int(estudiantes[k][i])
    if rooms < timeSlot:
        rooms = timeSlot
print(rooms)
