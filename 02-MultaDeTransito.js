function exercicio2() {
    console.log("Executando exercício 2\n");

    const prompt = require('prompt-sync')();
    const kmPorHora = parseInt(prompt("Qual velocidade em KM você estava transitando na via?:"))
    const limiteVelocidade = 80
    if (kmPorHora > limiteVelocidade) {
        let total = (kmPorHora - limiteVelocidade) * 5
        console.log("Você foi multado com o valor de: ", total, " pelo excesso de velocidade.")
    }
    else {
        console.log("Você andou dentro do limite permitido da via.")
    }

}

module.exports = exercicio2;