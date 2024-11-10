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

const chavesObjetos = Object.keys(torcedor);
console.log(chavesObjetos); //retorna todas as chaves do objeto em formato de array

if (!chavesObjetos.includes('endereco')) {
    console.error("a propriedade solicitada não existe")
}

const valoresObj = Object.values(torcedor);
console.log(valoresObj);

console.log("================================================================================================================");

if (valoresObj.includes('Flamengo')) {
    console.log("Este torcedor é flamenguista");
} else {
    console.error("Não há torcedores flamenguistas neste objeto");
}

console.log("================================================================================================================");


const entradaObj = Object.entries(torcedor);
console.log(entradaObj[2]); //retorna time: 'Flamengo' em formato de array

