function exercicio27() {
    console.log("Executando exercício 27\n");
    
    const prompt = require('prompt-sync')();
    let matriz1 = []
    let valor
    let vetor = []
    let quantidadeLinhas = 6
    let quantidadeColunas = 6
    
    GeraMatriz(matriz1, quantidadeLinhas, quantidadeColunas)
    console.table(matriz1)
    valor = parseInt(prompt("Digite um valor para multiplicar a matriz: "))
    
    console.log(`matriz multiplicada por ${valor} guardada no vetor:`)
    console.log(multiplicaMatrizGuardaNoVetor(matriz1, quantidadeLinhas, quantidadeColunas, valor,vetor))
    
    
    function multiplicaMatrizGuardaNoVetor(matriz, linhas, colunas, valor1, vetor1) {
        
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                vetor1.push(matriz[i][j] * valor1)
            }
        }
        return vetor1
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
module.exports = exercicio27;
    