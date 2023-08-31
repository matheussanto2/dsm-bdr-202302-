class ProgressaoGeometrica {
    primeiroTermo: number;
    razao: number;

    constructor(primeiroTermo: number, razao: number) {
        this.primeiroTermo = primeiroTermo;
        this.razao = razao;
    }

    gerarTermos(n: number): number[] {
        const termos: number[] = [this.primeiroTermo];

        for (let i = 1; i < n; i++) {
            const termoAnterior = termos[i - 1];
            const novoTermo = termoAnterior * this.razao;
            termos.push(novoTermo);
        }

        return termos;
    }
}

const primeiraProgressao = new ProgressaoGeometrica(2, 3);
const termosPrimeiraProgressao = primeiraProgressao.gerarTermos(50);

console.log("Primeira Progressão Geométrica:");
console.log(termosPrimeiraProgressao);
