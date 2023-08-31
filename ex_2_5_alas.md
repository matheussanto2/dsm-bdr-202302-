function sequenciaGeometrica(n) {
    if (n === 1) {
        return 2;
    } else {
        return sequenciaGeometrica(n - 1) * 3;
    }
}

const numeroDeElementos = 5; // Quantidade de elementos que você deseja na sequência

for (let i = 1; i <= numeroDeElementos; i++) {
    console.log(`Elemento ${i}: ${sequenciaGeometrica(i)}`);
}
