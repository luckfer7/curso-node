const alunos = ['Lucas', 'Sofia', 'Daniel', 'Alan'];
const medias = [9, 8, 5, 4]

const MediaAlunos = [alunos, medias];

function exibirNomeENota (aluno) {
    if(MediaAlunos[0].includes(aluno)) {
        const [alunos, medias] = MediaAlunos;
        //desestruturação
        const indice = alunos.indexOf(aluno)
        const alunoMedia = medias[indice]
        console.log(`A media do ${aluno} é ${alunoMedia}`)
    } else {
        console.log(`O aluno ${aluno} não existe`);
    }
}


exibirNomeENota("Alan")
exibirNomeENota("Lucas")
exibirNomeENota("Sofia")
exibirNomeENota("fff")


// let i = 5;
// let valorA = i++;
// let valorB = ++i;

// console.log("O valor de valorA é:", valorA);
// console.log("O valor de valorB é:", valorB);