function exercicio32() {
    console.log("Executando exercício 32\n");

    // Criar a matriz M(12,13)
    let M = geraMatriz(12, 13);
    // Exibir matriz original
    console.table(M)
    // Normalizar a matriz
    let M_normalizada = normalizarMatriz(M);

    // Exibir matriz modificada
    imprimirMatriz(M_normalizada, "Matriz Normalizada (cada elemento dividido pelo maior módulo da linha):");

    function geraMatriz(linhas, colunas) {
        let matriz = []
        for (let i = 0; i < linhas; i++) {
            matriz[i] = []
            for (let j = 0; j < colunas; j++) {
                matriz[i][j] = parseInt(sorteioMaquina(0, 100));
            }
        }
        return matriz
    }
    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function imprimirMatriz(matriz, titulo) {
        console.log(titulo);
        for (let i = 0; i < matriz.length; i++) {
            matriz[i] = (matriz[i].map(v => v.toFixed(2)));
        }

        console.table(matriz)
    }

    function normalizarMatriz(matriz) {
        let novaMatriz = [];
        for (let i = 0; i < matriz.length; i++) {
            let linha = matriz[i];
            let maiorModulo = Math.max(...linha.map(Math.abs));
            let novaLinha = linha.map(valor => valor / maiorModulo);
            novaMatriz.push(novaLinha);
        }
        return novaMatriz;
    }

}
module.exports = exercicio32;
