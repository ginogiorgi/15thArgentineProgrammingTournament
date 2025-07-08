n = int(input())
arr = list(map(int, input().split()))
result = arr[-1]
totalResult = 0
for chocolates in range(n-2, -1, -1):
    if arr[chocolates] < arr[chocolates+1] or arr[chocolates+1] == 1 and arr[chocolates] != 1:
        result += arr[chocolates]
    else:
        result += arr[chocolates+1]-1
    if result > totalResult:
        totalResult = result
    if arr[chocolates] == 1:
        result = 0
    
        
print(totalResult)
    
    
    