const prompt = require("prompt-sync")();

function main() {
    const n = parseInt(prompt("Verificar até: "));
    escrevePrimo(n);
}

function escrevePrimo(n) {
    let contPrimos = 0;

    for (let i = 2; i <= n; i++)
        if (verificaPrimo(i)) {
            contPrimos++;
            console.log(i)
        }

    console.log(`Primos entre 0 até ${n}: ${contPrimos}`);
}

function verificaPrimo(n) {
    let div = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0)
            div++;
    }

    if (div <= 2) {
        return true;
    }
    
    return false;

}

main()