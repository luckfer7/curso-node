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

function exibirOrganizada(org1, org2) {
    console.log(`Essa é a organizada ${org1}`);
    console.log(`Essa é a organizada ${org2}`);
    
}

exibirOrganizada(torcedor.organizada[0], torcedor.organizada[1]);

console.log("================================================================================================================");


//usando o spread operator
exibirOrganizada(...torcedor.organizada);

console.log("================================================================================================================");

const enviarCamisaUrubuzada = {
    destinatario: torcedor.nome,
    ...torcedor.endereco[0]
}
console.log(enviarCamisaUrubuzada);
