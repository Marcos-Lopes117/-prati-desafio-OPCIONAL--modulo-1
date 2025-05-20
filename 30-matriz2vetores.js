function exercicio30() {
    console.log("Executando exercício 30\n");

    const prompt = require('prompt-sync')();
    let matriz1 = []
    let SL = [0, 0, 0, 0, 0]
    let SC = [0, 0, 0, 0, 0]
    let quantidadeLinhas = 5
    let quantidadeColunas = 5

    GeraMatriz(matriz1, quantidadeLinhas, quantidadeColunas)
    console.table(matriz1)
    calculosDaMatriz(matriz1, quantidadeLinhas, quantidadeColunas)


    function calculosDaMatriz(matriz2, linhas, colunas) {

        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                SC[j] += matriz2[i][j]
                SL[i] += matriz2[i][j]
            }
        }
        console.log(`A soma das linhas é: ${SL}`)
        console.log(`A soma das colunas é: ${SC}`)

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
module.exports = exercicio30;
