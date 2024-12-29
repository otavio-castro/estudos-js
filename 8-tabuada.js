const prompt = require("prompt-sync")();

function Main() {
    const n = parseInt(prompt("Numero Inserido: "));
    tabuada(n);

}

function tabuada(n) {
    for (let i = 0; i <= 10; i++) {
        let multi = n * i;
        console.log(`${n} * ${i} = ${multi}`);
    }
}

Main()