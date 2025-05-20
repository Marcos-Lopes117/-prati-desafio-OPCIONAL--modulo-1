function exercicio29() {
    console.log("Executando exercício 29\n");

    const prompt = require('prompt-sync')();
    let matriz1 = []
    let somaL4 = 0
    let somaC2 = 0
    let somaDiagonal = 0
    let quantidadeLinhas = 5
    let quantidadeColunas = 5

    GeraMatriz(matriz1, quantidadeLinhas, quantidadeColunas)
    console.table(matriz1)
    calculosDaMatriz(matriz1, quantidadeLinhas, quantidadeColunas)


    function calculosDaMatriz(matriz2, linhas, colunas) {

        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                if (i == j) {
                    somaDiagonal += matriz2[i][j]
                }
                if (i == 4) {
                    somaL4 += matriz2[i][j]
                }
                if (j == 2) {
                    somaC2 += matriz2[i][j]
                }
            }
        }
        console.log(`A soma da linha 4 é: ${somaL4}`)
        console.log(`A soma da coluna 2 é: ${somaC2}`)
        console.log(`A soma dos valores da diagonal principal é:  ${somaDiagonal}`)

    }
    function GeraMatriz(matriz, linhas, colunas) {

        for (let i = 0; i < linhas; i++) {
            matriz[i] = []
            for (let j = 0; j < colunas; j++) {
                matriz[i][j] = parseInt(sorteioMaquina(0, 9));
            }
        }
    }
    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
module.exports = exercicio29;
