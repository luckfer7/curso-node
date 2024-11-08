const notas = [9, 6.5, 8, 5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;
console.log(media);