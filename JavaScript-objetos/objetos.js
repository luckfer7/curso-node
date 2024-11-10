const torcedor = {
    nome: 'Lucas',
    idade: 26,
    time: 'Flamengo'
}

// console.log(torcedor.nome);
// console.log(torcedor.time.substring(0, 3));

function exibeInfoTorcedor(objTorcedor, infoTorcedor) {
    return objTorcedor[infoTorcedor];
}

console.log(exibeInfoTorcedor(torcedor, 'nome'));
console.log(exibeInfoTorcedor(torcedor, 'idade'));
