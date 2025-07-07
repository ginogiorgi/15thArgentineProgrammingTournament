"""At the IT Campus "NEIMARK", there are training sessions in competitive programming — both individual and team-based!

For the next team training session, n
 students will attend, and the skill of the i
-th student is given by a positive integer ai
.

The coach considers a team strong if its strength is at least x
. The strength of a team is calculated as the number of team members multiplied by the minimum skill among the team members.

For example, if a team consists of 4
 members with skills [5,3,6,8]
, then the team's strength is 4⋅min([5,3,6,8])=12
.

Output the maximum possible number of strong teams, given that each team must have at least one participant and every participant must belong to exactly one team.

Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤104
). The description of the test cases follows.

The first line of each test case contains two integers n
 and x
 (1≤n≤2⋅105
, 1≤x≤109
) — the number of students in training and the minimum strength of a team to be considered strong.

The second line of each test case contains n
 integers ai
 (1≤ai≤109
) — the skill of each student.

It is guaranteed that the sum of n
 over all test cases does not exceed 2⋅105
.

Output
For each test case, output the maximum possible number of teams with strength at least x
.

Example
InputCopy
5
6 4
4 5 3 3 2 6
4 10
4 2 1 3
5 3
5 3 2 3 2
3 6
9 1 7
6 10
6 1 3 6 3 2
OutputCopy
4
0
4
2
1"""


def max_strong_teams(n, x, skills):
    skills.sort(reverse=True)
    count = 0
    team_size = 0

    for skill in skills:
        team_size += 1
        if team_size * skill >= x:
            count += 1
            team_size = 0

    return count


t = int(input())
for _ in range(t):
    n, x = map(int, input().split())
    a = list(map(int, input().split()))
    print(max_strong_teams(n, x, a))
