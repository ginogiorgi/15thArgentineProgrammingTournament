"""En el campus IT "NEIMARK" se realizan entrenamientos de programación competitiva, ¡tanto individuales como en equipo!

Para la próxima sesión de entrenamiento en equipo, asistirán n estudiantes, y la habilidad del i-ésimo estudiante está dada por un entero positivo a_i.

El entrenador considera que un equipo es fuerte si su fuerza es al menos x. La fuerza de un equipo se calcula como el número de integrantes multiplicado por la habilidad mínima entre sus miembros.

Por ejemplo, si un equipo tiene 4 miembros con habilidades [5, 3, 6, 8], la fuerza del equipo es 4 * min([5, 3, 6, 8]) = 12.

Salida: Imprimir el máximo número posible de equipos fuertes, sabiendo que cada equipo debe tener al menos un participante y cada participante debe pertenecer exactamente a un equipo.

Entrada:
- La primera línea contiene el número de casos de prueba t (1 ≤ t ≤ 10^4).
- Cada caso de prueba contiene dos enteros n y x (1 ≤ n ≤ 2*10^5, 1 ≤ x ≤ 10^9): el número de estudiantes y la fuerza mínima para que un equipo sea fuerte.
- La siguiente línea contiene n enteros a_i (1 ≤ a_i ≤ 10^9): la habilidad de cada estudiante.
- Se garantiza que la suma de n en todos los casos no supera 2*10^5.

Salida:
- Para cada caso de prueba, imprimir el máximo número posible de equipos con fuerza al menos x.

Ejemplo:
Entrada:
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

Salida:
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
