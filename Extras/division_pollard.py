import math
from collections import defaultdict

def pollard_rho(n):
    """Algoritmo Pollard's Rho para factorización"""
    if n % 2 == 0:
        return 2
    
    x = 2
    y = 2
    c = 1
    d = 1
    
    while d == 1:
        # Tortuga se mueve un paso
        x = (x * x + c) % n
        
        # Liebre se mueve dos pasos
        y = (y * y + c) % n
        y = (y * y + c) % n
        
        # Calcula GCD
        d = math.gcd(abs(x - y), n)
        
        # Si encuentra el número completo, cambia c
        if d == n:
            c += 1
            x = y = 2
            d = 1
            if c > 20:  # Evitar bucle infinito
                return n
    
    return d

def es_primo(n):
    """Test de primalidad simple"""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

def factorizar(n):
    """Factoriza n usando Pollard's Rho"""
    if n <= 1:
        return {}
    
    factores = defaultdict(int)
    
    # Remover factores de 2
    while n % 2 == 0:
        factores[2] += 1
        n //= 2
    
    # Usar Pollard's Rho para factores impares
    while n > 1:
        if es_primo(n):
            factores[n] += 1
            break
        
        factor = pollard_rho(n)
        if factor == n:  # Si no puede factorizar más
            factores[n] += 1
            break
            
        factores[factor] += 1
        n //= factor
    
    return factores

def obtener_divisores(factores):
    """Genera todos los divisores a partir de la factorización"""
    divisores = [1]
    
    for primo, exponente in factores.items():
        nuevos_divisores = []
        for div in divisores:
            for exp in range(exponente + 1):
                nuevos_divisores.append(div * (primo ** exp))
        divisores = nuevos_divisores
    
    return sorted(divisores)

def resolver_con_pollard(a, b):
    """Resuelve el problema usando Pollard's Rho"""
    # Factorizar a
    factores_a = factorizar(a)
    
    # Obtener todos los divisores de a
    divisores_a = obtener_divisores(factores_a)
    
    # Encontrar el mayor divisor que no sea divisible por b
    for xi in reversed(divisores_a):
        if xi % b != 0:
            return xi
    
    return 1  # Fallback

# Solución original (para comparar)
def resolver_original(a, b):
    divisible = 1
    while a % divisible == 0:
        divisible += 1
    divisible -= 1
    
    xi = a
    while xi % b == 0 or a % xi != 0:
        xi -= divisible
    
    return xi

# Programa principal
n = int(input())

for _ in range(n):
    tupla = list(map(int, input().split()))
    a, b = tupla[0], tupla[1]
    
    # Usar Pollard's Rho
    resultado = resolver_con_pollard(a, b)
    print(resultado)
    
    # Para debug: comparar con método original
    # resultado_original = resolver_original(a, b)
    # print(f"Pollard: {resultado}, Original: {resultado_original}")
