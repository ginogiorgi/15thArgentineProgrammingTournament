n = int(input())
events = list(map(str, input()))
hotel = ["0"]*10

for event in range(n):
    if(events[event] == "L"):
        for room in range(10):
            if hotel[room] == "0":
                hotel[room] = "1"
                break
    elif(events[event] == "R"):
        for room in range(9, -1, -1):
            if hotel[room] == "0":
                hotel[room] = "1"
                break
    else:
        hotel[int(events[event])] = "0"

print("".join(hotel))

        

