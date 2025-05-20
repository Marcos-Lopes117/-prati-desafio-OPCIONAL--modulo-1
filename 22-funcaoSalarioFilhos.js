function exercicio22() {
    console.log("Executando exercício 22\n");

    const prompt = require('prompt-sync')();
    let salario = 0
    let numFilhos = 0
    let verifica = 0
    let totalSalario = 0
    let totalFilhos = 0
    let maiorSalario = 0
    let salarioMenor = 0
    let contSalarioMenor = 0
    let contador = 0
    registroHabitantes()
    function registroHabitantes() {

        while (verifica === 0) {
            salario = parseInt(prompt("Digite seu salario: "))
            numFilhos = parseInt(prompt("Digite o numero de filhos: "))
            contador++
            totalSalario += salario
            totalFilhos += numFilhos
            if (salario <= 350) {
                salarioMenor += salario
                contSalarioMenor++
            }
            if (salario > maiorSalario) {
                maiorSalario = salario
            }
            verifica = parseInt(prompt("Pressione 0 para continuar e 1 para sair:  "))
        }

        console.log(`A média de salário da população é: ${totalSalario / contador}`)
        console.log(`A média de filhos da população é: ${totalFilhos / contador}`)
        console.log(`O maior salário é: ${maiorSalario}`)
        console.log(`O percentual de pessoas com salário até 350 é: ${(contSalarioMenor / contador) * 100}%`)

    }

}
module.exports = exercicio22;
