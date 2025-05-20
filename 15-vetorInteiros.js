function exercicio15() {
    console.log("Executando exercício 15\n");

    const prompt = require('prompt-sync')();
    let valores = []
    let pares = []

    console.log("Array de inteiros - apresentado pares no final")

    for (let i = 1; i <= 10; i++) {
        numero = prompt("Digite um valor para armazenar no vetor:")
        valores.push(numero)
        if (numero % 2 == 0) {
            pares.push(numero)
        }
    }
    console.log("Array completo:", valores)
    console.log("Somente os pares:", pares)

}
module.exports = exercicio15;