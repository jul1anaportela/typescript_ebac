"use strict";
const alunos = [
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
];
alunos.push({
    nome: "julia",
    cursos: ["Arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
