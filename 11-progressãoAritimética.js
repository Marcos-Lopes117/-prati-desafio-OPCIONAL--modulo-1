function exercicio11() {
    console.log("Executando exercício 11\n");

    const prompt = require('prompt-sync')();
    let termoPA = 0
    let primeiro = 0
    let verifica = 1
    let soma = 0
    termoPA = parseInt(prompt("Qual o termo da progressão aritimética?"))
    primeiro = parseInt(prompt("Qual primeiro número da progressão?"))
    console.log(primeiro)
    soma += primeiro

    while (verifica != 10) {
        primeiro += termoPA
        console.log(primeiro)
        verifica++
        soma += primeiro
    }
    console.log("O total da soma dos valores é: ", soma)

}
module.exports = exercicio11;
