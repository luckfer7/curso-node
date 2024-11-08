const alunos = ['Lucas', 'Sofia', 'Daniel', 'Alan'];
const medias = [9, 8, 5, 4]

const MediaAlunos = [alunos, medias];

function exibirNomeENota (aluno) {
    if(MediaAlunos[0].includes(aluno)) {
        const indice = MediaAlunos[0].indexOf(aluno)
        //vai entrar no primeiro array dentro do media alunos, e vai pegar o indice(indexOf) do aluno(no parametro)
        const alunoMedia = MediaAlunos[1][indice]
        //vai entrar no segundo array dentro do media alunos, então pegase o indice do aluno que foi passado na linha de cima.(indice)
        console.log(`A media do ${aluno} é ${alunoMedia}`)
        //vai imprimir o aluno e sua média.
    } else {
        console.log(`O aluno ${aluno} não existe`);
    }
}

//depois chama-se a função, passando o nome da pessoa que está no primeiro array.

exibirNomeENota("Alan")
exibirNomeENota("Lucas")
exibirNomeENota("Sofia")
exibirNomeENota("fff")
