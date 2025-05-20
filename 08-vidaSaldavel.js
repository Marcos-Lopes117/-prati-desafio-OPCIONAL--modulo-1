function exercicio8() {
    console.log("Executando exercício 8\n");

    const prompt = require('prompt-sync')();
    let resposta = 0
    let total = 0

    console.log("Troque suas horas de treino por dinheiro!")
    resposta = parseFloat(prompt("Quantas horas de treino neste mês? ex. 1.30 para 1h 30m"))

    if (resposta <= 10) {
        total = (resposta * 2) * 0.05
    }
    else if (resposta > 10 && resposta < 20) {
        total = (resposta * 5) * 0.05
    }
    else {
        total = (resposta * 10) * 0.05
    }

    console.log("O valor total dos pontos a serem resgatados é:", total)

}
module.exports = exercicio8;