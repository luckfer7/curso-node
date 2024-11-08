// let string = 'lucas';
// let numero = 1;
// let booleano = true

// console.log(typeof string)
// console.log(typeof numero)
// console.log(typeof booleano)


// const firstName = 'lucas';
// const lastName = 'Camilo'

// const fullName = firstName +  lastName;

// const printFullName = `My full name is ${fullName}`;

// console.log(printFullName);

// const number = 3;
// const string = 'string';

// const printBothTogether = `${number} ${string}`;
// console.log(printBothTogether)

// let anyVar = 5;
// console.log(anyVar);


// anyVar = 'guto'
// console.log(anyVar);


// const salarioMensal = 3500; 
// const despesasFixas = 1200; 
// const despesasVariaveis = 500; 
// const economiasMensais = 800;
// const bonusAnual = 3000;

// const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
// console.log(resultado);


// let valor1 = '5';
// let valor2 = 5;

// let resultado1 = valor1 + valor2;
// let resultado2;

// if (valor1 === valor2) {
//  resultado2 = 'Os valores são iguais.';
// } else {
//  resultado2 = 'Os valores são diferentes.';
// }

// console.log('Resultado 1:', resultado1);
// console.log('Resultado 2:', resultado2);


// const numero = 10;
// const resultado1 = (numero > 5 && numero < 15);
// const resultado2 = (numero === 10 || numero > 20);
// const resultado3 = !(numero < 5);

// console.log("Resultado 1:", resultado1);
// console.log("Resultado 2:", resultado2);
// console.log("Resultado 3:", resultado3);

function calculaProduto(a, b = 2, c = 1) {
    return a * b * c;
}
  
  const resultado1 = calculaProduto(3);
  const resultado2 = calculaProduto(2, 4);
  const resultado3 = calculaProduto(1, 2, 3);
  const resultado4 = calculaProduto(2, undefined, 5);
  
  console.log("Resultado 1:", resultado1);
  console.log("Resultado 2:", resultado2);
  console.log("Resultado 3:", resultado3);
  console.log("Resultado 4:", resultado4);