function exercicio9() {
    console.log("Executando exercício 9\n");

    const prompt = require('prompt-sync')();
    let totalSalarioM = 0
    let totalSalarioF = 0
    let totalSexoM = 0
    let totalSexof = 0
    let verifica = 1
    let respostaSalario = 0
    let respostaSexo = 0

    while (verifica != 0) {

        respostaSalario += parseFloat(prompt("Qual o salário do funcionário?"))
        respostaSexo = prompt("Qual o sexo do funcionário? [ 1 - masculino ou 2 - feminino]")
        if (respostaSexo == "1") {
            totalSalarioM += respostaSalario
            totalSexoM += 1
        }
        else if (respostaSexo == "2") {
            totalSalarioF += respostaSalario
            totalSexof += 1
        }
        else {
            console.log("Resposta inválida")
            break;
        }

        verifica = prompt("digite 1 para continuar e 0 para parar")

    }

    console.log("O total de funcionarios Masculinos é ", totalSexoM)
    console.log("recebendo o total de: ", totalSalarioM)
    console.log("O total de funcionarias femininas é ", totalSexof)
    console.log("recebendo o total de: ", totalSalarioF)


}
module.exports = exercicio9;
