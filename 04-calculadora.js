const prompt = require('prompt-sync')(); // Importa o pacote

console.log("-----------")
console.log("CALCULADORA")
console.log("-----------")

const operacao = prompt("Operação a ser realizada [+ , - , * , / ] : ");

const num1 = parseInt(prompt("Primeiro numero: "));
const num2 = parseInt(prompt("Segundo numero: "));
let resultado;

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
}

console.log(`${num1} ${operacao} ${num2} = ${resultado}`);