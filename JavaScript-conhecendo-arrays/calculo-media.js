const notas = [10, 6.5, 5, 9];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; //ao invés de dividir por 4 ele está dividindo pelo tamanho do array.

console.log(media);