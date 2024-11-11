const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// console.log(typeof stringEstudante);


// console.log(stringEstudante.nome)

const objEstudante = JSON.parse(stringEstudante); //reconverte para um formato de objeto
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);//depois de reconverter, aí sim podemos fazer operações  com ele.
