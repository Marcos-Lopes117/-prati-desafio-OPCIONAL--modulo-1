function exercicio17() {
    console.log("Executando exercício 17\n");

    const prompt = require('prompt-sync')();
    let nome = []
    let idade = []

    console.log("Array de nome e array de idade.\n Verifica se tem menos de 18 anos.")

    for (let i = 1; i <= 9; i++) {

        nome.push(prompt("Digite um nome para armazenar no vetor:"))
        idade.push(parseInt(prompt("Digite a idade para armazenar no vetor:")))
    }

    for (let i = 1; i <= 9; i++) {
        if (idade[i] < 18) {
            console.log(nome[i], "-", idade[i], "anos")
        }
    }

}
module.exports = exercicio17;