import pickle

def carregando_arquivo(nome_arquivo):
    with open(nome_arquivo, 'rb') as file:
        return pickle.load(file)

def acesso_vetor(n):
    return vetor[n-1]

vetor = carregando_arquivo('fibonacci.pkl')

n=int(input())

print(acesso_vetor(n))
