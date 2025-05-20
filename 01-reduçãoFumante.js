function exercicio1() {
    console.log("Executando exercício 1");

    const prompt = require('prompt-sync')();

    const quantidade = parseInt(prompt("Digite a quantidade de cigarros consumidos por dia:"))
    const tempoDeUso = parseFloat(prompt("Digite por quantos anos você é usuário de cigarro: ex. 1.5 = 1 ano e 5 meses"))
    let totalDeDias = tempoDeUso * 365
    let MinutosPorDia = quantidade * 10
    let totalMinutos = MinutosPorDia * totalDeDias

    let totalDiasDePerda = (totalMinutos / 1440).toFixed(0) /* 1440 é a quantidade de minuto que tem no dia */

    console.log("O total de dias perdidos por causa do cigarro: ", totalDiasDePerda)
}

module.exports = exercicio1;