const notas = [9, 6.5, 8, 5];

let somaDasNotas = 0

for(let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(media);