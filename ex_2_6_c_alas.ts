function calcularFatorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}

console.log(calcularFatorial(5)); // Saída: 120 (5! = 5 * 4 * 3 * 2 * 1)
