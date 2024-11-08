const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2)
//aqui ele começa do primeiro estudante e vai até a metade do array.


const sala2 = listaEstudantes.slice(listaEstudantes.length/2)
//aqui ele vai da metade pro final.

console.log(sala1);
console.log(sala2);