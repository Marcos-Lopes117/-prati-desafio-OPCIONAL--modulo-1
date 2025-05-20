function exercicio21() {
    console.log("Executando exercício 21\n");

    const prompt = require('prompt-sync')();
    let altura = 0
    let sexo = ""
    console.log("Verifica peso.")
    altura = prompt("Digite sua altura : ex 1.70 ")
    sexo = prompt("Digite seu sexo : masculino ou feminino ")
    verificaPesoIdeal(sexo, altura)

    function verificaPesoIdeal(sex, alt) {

        if (alt < 0) {
            console.log("Altura inválida")
            return 0;
        }

        if (sex == "masculino") {
            console.log(`Seu peso ideal é: ${((72.7 * alt) - 58)}`)
        }
        else if (sex == "feminino") {
            console.log(`Seu peso ideal é: ${((62.1 * alt) - 44.7)}`)
        }
        else {
            console.log("Sexo inválido")
            return 0;
        }

    }

}
module.exports = exercicio21;