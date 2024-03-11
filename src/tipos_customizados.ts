type aluno = {
    nome: string,
    cursos?: string[], //proprieades opcionais (pode colocar ou não)
    idade: number
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Frontend", "UI/UX"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["Frontend", "python"],
        idade: 23
    }
]

alunos.push({
    nome: "julia",
    cursos: ["Arquitetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}
