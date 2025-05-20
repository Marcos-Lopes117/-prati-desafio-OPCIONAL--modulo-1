function exercicio33() {
    console.log("Executando exercício 33\n");
    
    const prompt = require('prompt-sync')();
    let matriz1 = []
    let matriz2 = []
    let mediaDiagonalSecundaria = 0
    let cumprimento = 3
    
    GeraMatriz(matriz1, cumprimento)
    console.table(matriz1)
    console.log("Média da diagonal secundária:",mediaMatrizSecundaria(matriz1, cumprimento),"\n")
    console.log("Nova matriz com a diagonal principal multiplicada \n pela media da diagonal secundária:")
    console.table(novaMatriz(matriz2,cumprimento))
    
    
    function mediaMatrizSecundaria(matriz2, lado) {
        
        for (let i = lado-1; i >= 0; i--) {
            for (let j = lado-1; j >= 0; j--) {
                if (i == j) {
                    mediaDiagonalSecundaria += matriz2[i][j]
                }
                
            }
        }
        mediaDiagonalSecundaria = mediaDiagonalSecundaria/lado
        return (mediaDiagonalSecundaria.toFixed(2))
    }
    function GeraMatriz(matriz, lado) {
        
        for (let i = 0; i < lado; i++) {
        matriz[i] = []
        for (let j = 0; j < lado; j++) {
            matriz[i][j] = parseInt(sorteioMaquina(0, 9));
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
            if(i!=j){
                matriz[i][j] = matriz1[i][j]
            }else{
                matriz[i][j] = parseFloat((matriz1[i][j]*mediaDiagonalSecundaria).toFixed(2))
            }
        }
    }
    return matriz
}

}
module.exports = exercicio33;