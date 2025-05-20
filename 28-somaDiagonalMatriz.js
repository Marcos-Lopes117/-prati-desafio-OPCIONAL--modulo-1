function exercicio28() {
    console.log("Executando exercício 28\n");

    const prompt = require('prompt-sync')();
    let matriz1 = []
    let somaAcima = 0
    let somaAbaixo = 0
    let quantidadeLinhas = 10
    let quantidadeColunas = 10

    GeraMatriz(matriz1, quantidadeLinhas, quantidadeColunas)
    console.table(matriz1)
    somaMatrizDiagonais(matriz1, quantidadeLinhas, quantidadeColunas)
    console.log(`A soma dos valores da diagonal superior é: ${somaAcima}`)
    console.log(`A soma dos valores da diagonal inferior é: ${somaAbaixo}`)
    function somaMatrizDiagonais(matriz2, linhas, colunas) {

        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                if (i == j - 1) {
                    somaAcima += matriz2[i][j]
                }
                if (i - 1 == j) {
                    somaAbaixo += matriz2[i][j]
                }
            }
        }

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
module.exports = exercicio28;
