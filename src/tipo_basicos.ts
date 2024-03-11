let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

const nacionalidade: string = 'brasileira'


//arrays
const colegas: string[] = ['lucas', 'fernanda']

const tecnologias: Array<string> = ['html', 'css', 'js']

//array de apenas leitura
const notas: ReadonlyArray<number> = [7, 9, 5, 8]

//tuplas
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['juliana', true, 28]


//uniao de tipos
let idadeDaAna: number | string = 25
idadeDaAna = '25'


//any: utilizado quando fazemos integração com o backend
let dadosDaApi: any
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'