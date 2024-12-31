const prompt = require('prompt-sync')();

function obterCombu(opcao) {
    switch (opcao) {
        case 1:
            return ("Álcool");
        case 2:
            return ("Gasolina");
        case 3:
            return ("Diesel");
        default:
            return ("Opção inválida")
    }
}

function main() {
    console.log("-------------");
    console.log("ABASTECIMENTO")
    console.log("-------------");

    let n;
    do {
        n = parseInt(prompt("Escolha uma opção [1-Álcool, 2-Gasolina, 3- Diesel]: "));

        if (isNaN(n))
            console.log("Insira um número válido")

    } while (isNaN(n));

    console.log(`O cliente escolheu ${obterCombu(n)}`);
}

module.exports = { obterCombu };
//main(); Comentado para a exportacao funcionar