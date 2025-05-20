function exercicio31() {
    console.log("Executando exercício 31\n");
    
    const prompt = require('prompt-sync')();
    let matriz1 = []
    let diferentes = []
    let contadorIgual = 0
    let contadorDiferentes = 0
    let quantidadeLinhas = 30
    let quantidadeColunas = 30
let numeroInteiro = prompt('Digite um numero inteiro: de 0 a 10')
GeraMatriz(matriz1, quantidadeLinhas, quantidadeColunas)
console.table(matriz1)
console.log("Quantidade de remoções:", contadorIgual)
console.log("contador diferentes:", contadorDiferentes)
GeraMatrizComXValores(contadorDiferentes, matriz1)

function GeraMatriz(matriz, linhas, colunas) {
    
    for (let i = 0; i < linhas; i++) {
        matriz[i] = []
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = parseInt(sorteioMaquina(0, 10));
            if (matriz[i][j] != numeroInteiro) {
                contadorDiferentes += 1
                diferentes.push(matriz[i][j])
            } else {
                contadorIgual += 1
            }
            
        }
    }
}
function sorteioMaquina(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function GeraMatrizComXValores(quantidadeDeElementos, matriz) {
    
    const tamanho = Math.ceil(Math.sqrt(quantidadeDeElementos)); // calcula o lado da matriz
    console.log("tamanho = ", tamanho, " X ", tamanho)
    let contador = 0;
    let linha = [];
    for (let i = 0; i < tamanho; i++) {
        linha[i] = []
        for (let j = 0; j < tamanho; j++) {
            linha[i][j] = diferentes [contador]
            if (contador >= quantidadeDeElementos) {
                linha[i][j] = null;
                contador++;
            } else{
                contador++;
            }
        }
        
    }
    console.log("Matriz com os números removidos:")
    console.table(linha);
}

}
module.exports = exercicio31;
