function exercicio7() {
    console.log("Executando exercício 7\n");

    const prompt = require('prompt-sync')();
    const pop = 90
    const luxo = 150
    console.log("Digite as informações para gerar sua fatura de aluguel:")
    let tipoCarro = prompt("Qual carro foi alugado? [popular] ou [luxo]")
    const totalDias = parseInt(prompt("Quantos dias de aluguel?"))
    const totalkm = parseInt(prompt("Quantos KM foram rodados?"))
    let totalConta = 0

    if (tipoCarro == "popular")
        tipoCarro = 90
    else if (tipoCarro == "luxo")
        tipoCarro = 150
    else
        console.log("tipo de carro inválido")

    switch (tipoCarro) {
        case 90: {
            if (totalkm <= 100) {
                totalConta = (totalDias * tipoCarro) + (totalkm * 0.20)
            }
            else if (totalkm > 100) {
                totalConta = (totalDias * tipoCarro) + (totalkm * 0.10)
            }
        }

        case 150: {
            if (totalkm <= 200) {
                totalConta = (totalDias * tipoCarro) + (totalkm * 0.30)
            }
            else if (totalkm > 200) {
                totalConta = (totalDias * tipoCarro) + (totalkm * 0.25)
            }
        }
    }

    console.log("O custo total do aluguel foi:", totalConta)
    
}
module.exports = exercicio7;