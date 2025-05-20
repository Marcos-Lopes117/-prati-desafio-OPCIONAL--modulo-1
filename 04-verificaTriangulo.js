function exercicio4() {
    console.log("Executando exercício 4\n");

    const prompt = require('prompt-sync')();
    let segmento1 = parseFloat(prompt('Digite o 1º segmento de reta:'))
    let segmento2 = parseFloat(prompt('Digite o 2º segmento de reta:'))
    let segmento3 = parseFloat(prompt('Digite o 3º segmento de reta:'))

    if ((segmento1 < segmento2 + segmento3) && (segmento2 < segmento1 + segmento3) && (segmento3 < segmento2 + segmento1)) {
        if (segmento1 === segmento2 && segmento2 === segmento3) {
            console.log("é possível formar um triângulo Equilátero com esses segmentos") // Todos os lados iguais
        } else if (segmento1 === segmento2 || segmento1 === segmento3 || segmento2 === segmento3) {
            console.log("é possível formar um triângulo isósceles com esses segmentos"); // Dois lados iguais
        } else {
            console.log("é possível formar um triângulo Escaleno com esses segmentos"); // Todos os lados diferentes
        }
    }
    else {
        console.log("Matematicamente não é possivel se formar um triângulo com esses segmentos")
    }
}
module.exports = exercicio4;