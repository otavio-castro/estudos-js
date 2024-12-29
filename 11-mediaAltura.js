const prompt = require("prompt-sync")();

function main() {
    const alturas = criaVetor();
    const media = descobreMedia(alturas);

    console.log(`Media das Alturas: ${media}`);
}

function criaVetor() {
    const V = new Array(5)

    for (let i = 0; i < V.length; i++)
        V[i] = parseFloat(prompt(`Altura da Pessoa ${i + 1}: `));

    return (V);
}

function descobreMedia(alturas) {
    let media;
    let soma = 0;

    //Percorre todo o vetor, somando os elementos
    alturas.forEach(item => {
        soma += item;
    })

    media = soma / alturas.length;

    return (parseFloat(media.toFixed(2)));
}

main();