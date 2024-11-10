const torcedor = {
    nome: 'Lucas',
    idade: 26,
    time: 'Flamengo'
}

torcedor.cidade = 'Belford roxo';
console.log(torcedor);


//deletando

delete torcedor.cidade;
console.log(torcedor);