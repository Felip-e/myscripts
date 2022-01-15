n1, n2 = 2, 3


def soma(a, b):
    return a + b


print(soma(n1, n2))


def sub(a, b):
    return a - b


print(sub(n2, n1))


def soma_lista(k):
    if len(k) == 1:
        return k[0]

    return k[0] + soma_lista(k[1:])


lista = [i for i in range(1, 11)]

print(soma_lista(lista))
