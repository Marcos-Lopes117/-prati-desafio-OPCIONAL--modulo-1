function exercicio18() {
    console.log("Executando exercício 18\n");

    const prompt = require('prompt-sync')();
    let variavel
    console.log("Nome, cargo e salario.")
    variavel = prompt("Digite um nome:")
    variavel += " - "
    variavel += prompt("Digite o cargo:")
    variavel += " - "
    variavel += prompt("digite o salario:")

    console.log(variavel)

}
module.exports = exercicio18;
