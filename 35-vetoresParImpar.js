function exercicio35() {
    console.log("Executando exercício 35\n");

    const prompt = require("prompt-sync")()
    let vetorPrincipal = []
    let vetorPar = []
    let vetorImpar = []
    vetorPrincipal.push(prompt("Digite um valor para guardar no vetor:"))

    for (let i = 0; i < 30; i++) {

        if (vetorPrincipal[i] == "") {
            vetorPrincipal[i] = 0
        }
        if (vetorPrincipal[i] % 2 == 0) {
            if (vetorPar.length <= 4) {
                vetorPar.push(vetorPrincipal[i])
            }
            if (vetorPar.length == 5) {
                console.log("Vetor par completou 5 : ", vetorPar)
                vetorPar = []
            }
        } else {
            if (vetorImpar.length <= 4) {
                vetorImpar.push(vetorPrincipal[i])
            }
            if (vetorImpar.length == 5) {
                console.log("Vetor ímpar completou 5 : ", vetorImpar)
                vetorImpar = []
            }
        }
        vetorPrincipal.push(prompt("Digite um valor para guardar no vetor:"))
    }
    console.log(`Os vetor principal é : ${vetorPrincipal} \n`)
    console.log(`O vetor de pares que restou é : ${vetorPar}\n`)
    console.log(`O vetor de ímpares que restou foi : ${vetorImpar}\n`)

}
module.exports = exercicio35;

