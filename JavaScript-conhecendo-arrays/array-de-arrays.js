const alunos = ['Lucas', 'Sofia', 'Daniel', 'Alan'];
const medias = [9, 8, 5, 4]

const MediaAlunos = [alunos, medias];
console.log(`
    O nome do aluno é: ${MediaAlunos[0][3]}.
    A media dele é: ${MediaAlunos[1][3]}
`)

//o primeiro colchete se refere ao array que eu quero acessar. 
//o segundo colchete se refere ao array ao indice do array que acessei no primeiro colchete.