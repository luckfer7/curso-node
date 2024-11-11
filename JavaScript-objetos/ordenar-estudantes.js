const estudantes = require('./estudantes.json');

function ordenarPorNomes(lista, propriedade){
    return lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0
    })
}

const listaOrdenada = ordenarPorNomes(estudantes, 'nome');
console.log(listaOrdenada);
