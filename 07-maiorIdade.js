const prompt = require("prompt-sync")();

function main() {
    const n = parseInt(prompt("Quantidade de Idades: "));
    const V = criaVetor(n);
    let maiorIdade = verificaMaior(V);

    console.log(`Maior Idade: ${maiorIdade}`);
}

function verificaMaior(V) {
    let maior = V[0];

    for (let i = 1; i < V.length; i++)
        if (V[i] > maior)
            maior = V[i]

    return (maior);
}

function criaVetor(n) {
    const V = new Array(n);

    for (let i = 0; i < V.length; i++)
        V[i] = parseInt(prompt(`Idade ${i + 1}: `));

    return (V);
}

main();