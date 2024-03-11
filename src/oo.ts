class Pessoa {
    nome: string;
    renda?: number //opicional

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} diz oi`;
    }
}

//modificadores
class ContaBancaria {
    protected saldo: number = 0; //protect consegue acessar nas classes herdeiras
    public numeroConta: number; //public já é o default, por isso nem precisa colocar

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }

    private getSaldo() { //privado só consegue acessar dentro da própria classe
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2; //bug
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco()

