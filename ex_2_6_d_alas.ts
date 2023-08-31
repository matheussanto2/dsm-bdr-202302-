class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Estudante extends Pessoa {
    faculdade: string;

    constructor(nome: string, idade: number, faculdade: string) {
        super(nome, idade);
        this.faculdade = faculdade;
    }

    apresentar() {
        super.apresentar();
        console.log(`Estou estudando na faculdade ${this.faculdade}.`);
    }
}

const estudante = new Estudante("Alice", 20, "Universidade XYZ");
estudante.apresentar();
