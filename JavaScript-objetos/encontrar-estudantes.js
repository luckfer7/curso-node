const estudantes = require('./estudantes.json');

function buscarEstudante(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));//vai procurar tanto por string quanto por valor
}

const estEncontrado = buscarEstudante(estudantes, 'nome' ,'Stephine');
console.log(estEncontrado);

const estTelEncontrado = buscarEstudante(estudantes, 'telefone' ,'5327428873');
console.log(estTelEncontrado);

