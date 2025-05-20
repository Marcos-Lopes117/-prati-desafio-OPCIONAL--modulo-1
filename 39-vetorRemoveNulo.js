function exercicio39() {
    console.log("Executando exercício 39\n");

    const prompt = require("prompt-sync")()
    let min = 0
    let max = 100
    let vetorA = []
    let vetorB = []
    //preenche vetor
    for (let i = 0; i < 100; i++) {
        vetorA[i] = sortearNumero()
    }
    console.log("Vetor completo: ")
    console.log(vetorA)
    vetorB = filtrarValidos(vetorA)
    console.log("Vetor filtrado, removendo nulos e vazios: ")
    console.log(vetorB)


    function filtrarValidos(vetorOriginal) {
        // Retorna apenas os elementos diferentes de null e ""
        let vetorFiltrado = vetorOriginal.filter(function (valor) {
            return valor !== null && valor !== "";
        });

        return vetorFiltrado;
    }

    function sortearNumero() {
        let sorteio = Math.floor(Math.random() * 22)
        let valor
        if (sorteio === 0) {
            valor = null;
        } else if (sorteio === 1) {
            valor = ""
        } else {
            valor = sorteio - 1 // Para cair de 1 a 100
        }
        return valor
    }

}
module.exports = exercicio39;