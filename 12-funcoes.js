function somar(num1, num2) {
    return (num1 + num2);
}

const soma2 = (num1, num2) => {
    return (num1 + num2);
}

function descobreMedia(V) {
    let media;
    let soma = 0;

    //Percorre todo o vetor, somando os elementos
    V.forEach(item => {
        soma += item;
    })

    media = soma / V.length;

    return (parseFloat(media.toFixed(2)));
}


function main() {
    const alturas = [1.5, 1.85, 1.60, 1.90, 1.75];
    console.log(somar(1, 2));
    console.log(soma2(1, 2));

    const mediaAlturas = descobreMedia(alturas);

    console.log(`Média das Alturas: ${mediaAlturas}`);
}

main();