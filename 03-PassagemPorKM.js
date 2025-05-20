function exercicio3() {
    console.log("Executando exercício 3\n");

    const prompt = require('prompt-sync')();
    const kmTotal = parseInt(prompt("Quantos kilometros de viagem?"))
    if (kmTotal > 200) {
        let total = (kmTotal * 0.50)
        console.log("O valor da passagem é: ", total)
    }
    else {
        let total = (kmTotal * 0.45)
        console.log("O valor da passagem é: ", total)
    }
}

module.exports = exercicio3;
