// const nomes = ['lucas', 'daniel', 'carolina', 'daniele', 'evelyn', 'erica']

// for(let indice = 0; indice < nomes.length; indice++) {
//     console.log(indice, nomes[indice]);
    
// }

const notas = [9, 6.5, 8, 5];

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]
    
}

const media = somaDasNotas / notas.length;
console.log(media);
