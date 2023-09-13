class ModifiedFibonacci {
    cachedResults: Record<number, number> = {};
    
    calculate(n: number): number {
        if (n <= 0) {
            return 0;
        } else if (n === 1 || n === 2) {
            return 1;
        } else {
            if (this.cachedResults[n]) {
                console.log(`Valor já calculado para F(${n}): ${this.cachedResults[n]}`);
                return this.cachedResults[n];
            }
            const result = this.calculate(n - 1) + this.calculate(n - 2);
            this.cachedResults[n] = result;
            console.log(`Calculando F(${n}) = ${result}`);
            return result;
        }
    }
}

const modifiedFibonacci = new ModifiedFibonacci();
console.log(modifiedFibonacci.calculate(10));
console.log(modifiedFibonacci.calculate(5));
