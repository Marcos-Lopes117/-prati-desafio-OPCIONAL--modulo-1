function exercicio14() {
    console.log("Executando exercício 14\n");

    const prompt = require('prompt-sync')();
    let nome = []
    console.log("Array de nomes - apresentado na sequencia inversa")

    for (let i = 1; i <= 7; i++) {
        nome.push(prompt("Digite um nome para armazenar no vetor:"))
    }

    console.log(nome.reverse())

}
module.exports = exercicio14;