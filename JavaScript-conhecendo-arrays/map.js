const notas = [10, 9, 5.5, 6];

// const notasAtualizadas = notas.map(function (nota) {
//     return nota + 1;
// })

const notasAtualizadas = notas.map( (nota) => nota + 1 >= 10 ? 10 : nota + 1)
console.log(notasAtualizadas);


const nomes = ["ana Julia", "Caio vinicius", "BIA SIlva"];
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);
