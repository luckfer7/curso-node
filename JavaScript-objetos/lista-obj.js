const torcedor = {
    nome: 'Lucas',
    idade: 26,
    time: 'Flamengo',
    cidade: 'Belford Roxo',
    organizada: ['Jovem fla', 'urubuzada'],
    endereco: [{
        rua: 'Dona Isaura',
        numero: '56',
        bairro: 'Heliópolis'
    }]
    
}

torcedor.endereco.push({
    rua: 'Marsilio Dias',
    numero: '108',
    bairro: 'Areia branca'
})

// console.log(torcedor);

const listaEnderecoComBairro = torcedor.endereco.filter((endereco) => endereco.bairro)
console.log(listaEnderecoComBairro[1].bairro)
//retorna o nome do bairro que pertence indice do objeto
