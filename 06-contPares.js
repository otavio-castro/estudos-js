// Esse programa vai solicitar "n" números e verificar quantos são pares e impares

const prompt = require("prompt-sync")();
let num, contPar = 0, contImpar = 0;

const n = parseInt(prompt("Quantidade de números: "))


function verificaPar(num) {
    if ((num % 2) == 0)
        return (true)
    else
        return (false)
}

for (let i = 1; i <= n; i++) {

    // Verificação para garantir que o número seja um inteiro válido
    do {

        num = parseInt(prompt(`${i}º numero: `))

    } while (isNaN(num))

    if (verificaPar(num))
        contPar++;
    else
        contImpar++;
}

console.log(`Quantidade de Pares: ${contPar}`);
console.log(`Quantidade de Impares: ${contImpar}`);