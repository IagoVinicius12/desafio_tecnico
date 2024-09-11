const funcao_reg = (str: string) => {
    let str2: string = str;
    let array: [string, string, number][] = [];

    while (str2.length > 0) {
        let letra: string = str2[0];
        let regex: RegExp = new RegExp(letra, 'gi');
        let todas_oc: RegExpMatchArray | null = str2.match(regex);

        if (todas_oc) {
            array.push([letra.toLowerCase(), letra, todas_oc.length]);
        }
        str2 = str2.replace(regex, '');
    }
    return array
}
const str: string = "FazendaTech is a pioneer on Generative AI technology!";

var letr_primeiraOc_cont:[string,string,number][]=funcao_reg(str)
console.log(`Letra | Primeira ocorrencia | Contagem`);
console.log(`---------------------------------`);

letr_primeiraOc_cont.forEach(([char1, char2, count]) => {
    console.log(`${char1.padEnd(5)} \t\t| ${char2.padEnd(5)} \t| ${count}`);
});

// Primeiro é feito uma string auxiliar, é retirado da string a primeira letra, após isso é feito uma Regular expression para encontrar a letra na string 
// quando encontrado é colocado no array de array a letra minuscula depois a primeira ocorrência e depois disso é retirada todas as ocorrências daquela letra na string
