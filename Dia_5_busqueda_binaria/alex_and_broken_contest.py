word = input()
alexFriends = ["Danil", "Olya", "Slava", "Ann", "Nikita"]
count = 0
for friend in alexFriends:
    count += word.count(friend)
print("YES" if count == 1 else "NO")

