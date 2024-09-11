n= int(input())

vet=[1,1]
for i in range(n-2):
    vet.append(vet[i+1]+vet[i]) 
print(vet[len(vet)-1])

