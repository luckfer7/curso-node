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
    }],
    mediaDePresencaNoEstadio: 8,
    estaAprovado: function (mediaBase) {
        return this.mediaDePresencaNoEstadio >= mediaBase ? true : false
    }
    
}
console.log(torcedor.estaAprovado(9));

//o this faz referencia a media dentro da função dentro do objeto