import pickle

def precomputar(limite):
    vet = [0] * (limite + 1)
    vet[0], vet[1] = 1, 1
    for i in range(2, limite + 1):
        vet[i] = vet[i - 1] + vet[i - 2]
    return vet

def salvando_arquivo(vet, filename):
    with open(filename, 'wb') as file:
        pickle.dump(vet, file)

fib_array = precomputar(1000)
salvando_arquivo(fib_array, 'fibonacci.pkl')
