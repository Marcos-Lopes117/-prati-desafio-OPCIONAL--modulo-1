function exercicio40() {
    console.log("Executando exercício 40\n");

    const prompt = require("prompt-sync")()
    let resultadoLoteria = []
    let vetorApostas = []
    geraResultados()
    console.log(`O resultado da loteria é:`)
    console.log(resultadoLoteria)
    geraApostas()
    console.log(`As apostas foram:`)
    console.log(vetorApostas)


    for (let i = 0; i < vetorApostas.length; i++) {
        if (vetoresSaoIguais(vetorApostas[i], resultadoLoteria)) {
            console.log(`A aposta ${i + 1} é a vencedora.`)
        }
    }
    //gera resultado loteria
    function geraResultados() {
        for (let i = 0; i < 5; i++) {
            resultadoLoteria = ordenarVetor(gerarNumerosUnicos(5, 0, 20))
        }
    }
    //gerar apostas
    function geraApostas() {
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 5; j++) {
                vetorApostas[i] = ordenarVetor(gerarNumerosUnicos(5, 0, 20))
            }
        }
    }

    function gerarNumerosUnicos(quantidade, min, max) {
        const numeros = new Set();
        while (numeros.size < quantidade) {
            const numero = Math.floor(Math.random() * (max - min + 1)) + min;
            numeros.add(numero);
        }
        return Array.from(numeros);
    }

    function ordenarVetor(vetor) {
        return [...vetor].sort((a, b) => a - b);
    }

    function vetoresSaoIguais(v1, v2) {
        if (v1.length !== v2.length) return false;

        for (let i = 0; i < v1.length; i++) {
            if (v1[i] !== v2[i]) return false;
        }

        return true;
    }

}
module.exports = exercicio40;