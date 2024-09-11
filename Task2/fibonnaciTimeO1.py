import math

def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    phi = (1 + math.sqrt(5)) / 2
    psi = (1 - math.sqrt(5)) / 2
    
    return round((phi**n - psi**n) / math.sqrt(5))

n = int(input())
print(fibonacci(n))