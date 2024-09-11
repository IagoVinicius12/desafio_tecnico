"use strict";
const funcao_reg = (str) => {
    const countMap = {};
    const firstOccurrenceMap = {};
    // Count occurrences and track first occurrences
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (!countMap[char]) {
            countMap[char] = 0;
            firstOccurrenceMap[char] = i;
        }
        countMap[char]++;
    }
    console.log(`Letra | Primeira ocorrência | Contagem`);
    console.log(`--------------------------------------`);
    // Print the results
    for (const [char, count] of Object.entries(countMap)) {
        console.log(`${char.padEnd(5)} \t| ${str[firstOccurrenceMap[char]].padEnd(20)} | ${count}`);
    }
};
const str = "FazendaTech is a pioneer on Generative AI technology!";
funcao_reg(str);
