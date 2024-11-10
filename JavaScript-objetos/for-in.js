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
    },
    {
        rua: 'Marsilio Dias',
        numero: '108',
        bairro: 'Areia branca'
    }]
}

for(let chave in torcedor) {
    const tipo = typeof torcedor[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${torcedor[chave]}`
        console.log(texto);
    }
    
    
}