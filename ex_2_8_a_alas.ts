def progressao_aritmetica_recursiva(n, a1, r):
    if n == 1:
        return a1
    else:
        return progressao_aritmetica_recursiva(n - 1, a1, r) + r

print(progressao_aritmetica_recursiva(5, 2, 3))  # Exemplo de chamada recursiva
