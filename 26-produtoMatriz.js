function exercicio26() {
    console.log("Executando exercício 26\n");

    let matriz1 = []
    let matriz2 = []
    let quantidadeLinhas = 3
    let quantidadeColunas = 5
    let produtoMatriz = []

    GeraMatriz(matriz1, quantidadeLinhas, quantidadeColunas)
    GeraMatriz(matriz2, quantidadeLinhas, quantidadeColunas)

    console.table(matriz1)
    console.table(matriz2)

    ProdutoDeMatrizes(matriz1, matriz2, produtoMatriz)

    console.table(produtoMatriz)

    function ProdutoDeMatrizes(matrizTermo1, matrizTermo2, matrizProduto) {

        for (let i = 0; i < quantidadeLinhas; i++) {
            matrizProduto[i] = []

            for (let j = 0; j < quantidadeColunas; j++) {
                matrizProduto[i][j] = matrizTermo1[i][j] * matrizTermo2[i][j];
            }
        }

    }

    function GeraMatriz(matriz, linhas, colunas) {

        for (let i = 0; i < linhas; i++) {
            matriz[i] = []
            for (let j = 0; j < colunas; j++) {
                matriz[i][j] = parseInt(sorteioMaquina(0, 10));
            }
        }
    }

    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
module.exports = exercicio26;
