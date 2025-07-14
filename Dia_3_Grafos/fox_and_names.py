n = int(input())
names = []
for _ in range(n):
    names.append(input().strip())

graph = {}
in_degree = {}

for c in "abcdefghijklmnopqrstuvwxyz":
    graph[c] = set()
    in_degree[c] = 0

impossible = False
for i in range(n - 1):
    name1 = names[i]
    name2 = names[i + 1]

    found_diff = False
    for j in range(min(len(name1), len(name2))):
        if name1[j] != name2[j]:
            if name2[j] not in graph[name1[j]]:
                graph[name1[j]].add(name2[j])
                in_degree[name2[j]] += 1
            found_diff = True
            break

    if not found_diff and len(name1) > len(name2):
        impossible = True
        break

if impossible:
    print("Impossible")
else:
    result = []

    while len(result) < 26:
        next_char = None
        for letter in "abcdefghijklmnopqrstuvwxyz":
            if letter not in result and in_degree[letter] == 0:
                next_char = letter
                break

        if next_char is None:
            print("Impossible")
            exit()

        result.append(next_char)

        for neighbor in graph[next_char]:
            in_degree[neighbor] -= 1

    print("".join(result))
