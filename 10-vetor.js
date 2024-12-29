const numeros = []

numeros.push(1);
numeros.push(2);
numeros.push(3); //Adiciona no final

// console.log('Vetor Inicial:', numeros);

const removidoUltimo = numeros.pop(); //Remove o Ultimo
// console.log('Vetor Pop: ', removidoUltimo);

// const removidoPrimeiro = numeros.shift(); //Remove o Primeiro
// console.log('Vetor Shift: ', removidoPrimeiro);

// console.log('Vetor Final:', numeros);

numeros.unshift(99); //Adiona na frente
numeros.unshift(99);
numeros.unshift(22);
numeros.unshift(33);
console.log('Vetor Unshift: ', numeros);

// console.log('Vetor Slice: ', numeros.slice(2)); //Começa o Vetor a partir dê: 

let soma = 0

numeros.forEach(item => {
    soma += item;
})

// É a mesma coisa que isso, só que mais simples
// for (let i = 0; i < numeros.length; i++)
//     soma += numeros[i];

console.log(soma);


