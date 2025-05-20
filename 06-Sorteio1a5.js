function exercicio6() {
    console.log("Executando exercício 6\n");

    const prompt = require('prompt-sync')();
    let resposta = 0
    escolhaMaquina = sorteioMaquina(1, 5);

    console.log("A máquina sorteou um número de 1 a 5, tente acertar")
    resposta = parseInt(prompt("Qual número você escolhe?"))
    if (resposta == escolhaMaquina) {
        console.log("Você acertou!, a máquina sorteou o número ", resposta)
    }
    else {
        console.log("Você errou!, a máquina sorteou o número ", escolhaMaquina)
    }
    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


}
module.exports = exercicio6;