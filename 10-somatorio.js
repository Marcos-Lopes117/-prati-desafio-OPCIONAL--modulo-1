function exercicio10() {
    console.log("Executando exercício 10\n");

    const prompt = require('prompt-sync')();
    let verifica = 1
    let somatorio = 0
    let menorValor = 9999999999
    let quantidade = 0
    let quantosPares = 0
    let numero

    do {
        numero = parseFloat(prompt("Digite o valor?"))
        if (numero % 2 == 0) {
            quantosPares += 1
        }
        if (numero < menorValor) {
            menorValor = numero
        }
        somatorio += numero
        quantidade += 1

        verifica = prompt("digite 1 para continuar e 0 para parar")

    } while (verifica != 0)

    console.log("O somatório dos valores é: ", somatorio)
    console.log("O menor valor foi: ", menorValor)
    console.log("A média dos valores é: ", (somatorio / quantidade))
    console.log("Quantidade de números pares: ", quantosPares)

}
module.exports = exercicio10;
