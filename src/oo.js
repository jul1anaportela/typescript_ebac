"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz oi`;
    }
}
//modificadores
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0; //protect consegue acessar nas classes herdeiras
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2; //bug
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco();
