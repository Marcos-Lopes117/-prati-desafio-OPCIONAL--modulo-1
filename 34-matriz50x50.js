function exercicio34() {
    console.log("Executando exercício 34\n");

    const prompt = require('prompt-sync')();
    let matriz1 = []
    let matriz2 = []
    let diagonal = []
    let cumprimento = 50

    GeraMatriz(matriz1, cumprimento)
    console.table(matriz1)
    diagonal = diagonalSecundaria(matriz1, cumprimento)
    console.log("Diagonal principal :", diagonal)
    console.log("Matriz multiplicada pela diagonal da linha correspondente:")
    console.table(novaMatriz(matriz2, cumprimento))


    function diagonalSecundaria(matriz, lado) {
        let vetor = []
        for (let i = 0; i < lado; i++) {
            for (let j = 0; j < lado; j++) {
                if (i == j) {
                    vetor[i] = matriz[i][j]
                }

            }
        }
        return vetor
    }
    function GeraMatriz(matriz, lado) {

        for (let i = 0; i < lado; i++) {
            matriz[i] = []
            for (let j = 0; j < lado; j++) {
                matriz[i][j] = parseInt(sorteioMaquina(0, 100));
            }
        }
        return matriz
    }
    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function novaMatriz(matriz, lado) {

        for (let i = 0; i < lado; i++) {
            matriz[i] = []
            for (let j = 0; j < lado; j++) {
                matriz[i][j] = parseFloat((matriz1[i][j] * diagonal[i]).toFixed(2))
            }
        }
        return matriz
    }

}
module.exports = exercicio34;