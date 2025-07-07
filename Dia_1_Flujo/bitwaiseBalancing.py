"""You are given three non-negative integers b
, c
, and d
.

Please find a non-negative integer a∈[0,261]
 such that (a|b)−(a&c)=d
, where |
 and &
 denote the bitwise OR operation and the bitwise AND operation, respectively.

If such an a
 exists, print its value. If there is no solution, print a single integer −1
. If there are multiple solutions, print any of them.

Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤105
). The description of the test cases follows.

The only line of each test case contains three positive integers b
, c
, and d
 (0≤b,c,d≤1018
).

Output
For each test case, output the value of a
, or −1
 if there is no solution. Please note that a
 must be non-negative and cannot exceed 261
.

Example
InputCopy
3
2 2 2
4 2 6
10 2 14
OutputCopy
0
-1
12"""


def solve():
    import sys

    input = sys.stdin.readline
    t = int(input())
    for _ in range(t):
        b, c, d = map(int, input().split())
        a = 0
        possible = True
        for i in range(61):
            b_i = (b >> i) & 1
            c_i = (c >> i) & 1
            d_i = (d >> i) & 1

            ok0 = ((0 | b_i) - (0 & c_i)) == d_i
            ok1 = ((1 | b_i) - (1 & c_i)) == d_i
            if ok0:

                pass
            elif ok1:
                a |= 1 << i
            else:
                possible = False
                break
        if possible and a <= (1 << 61):
            print(a)
        else:
            print(-1)


if __name__ == "__main__":
    solve()
