function exercicio38() {
    console.log("Executando exercício 38\n");

    const prompt = require("prompt-sync")()
    let vetorSecundario = []
    let vetorPrincipal = []
    let auxiliar = 0
    let resp = 0
    let flag = 1
    //lê vetor de 6 posições
    for (let i = 0; i < 6; i++) {
        vetorPrincipal[i] = parseInt(prompt("Digite números para armazenar no vetor:"))
        vetorSecundario[i] = vetorPrincipal[i]
        if (!vetorPrincipal[i]) {
            vetorPrincipal[i] = 0
        }
    }

    //Escolhe opção
    console.log("Digite: \n1 para Soma dos elementos\n2 para produto dos elementos")
    console.log("3 para média dos elementos \n4 para ordenar em ordem crescente")
    console.log("5 para mostrar o vetor \n0 para sair")

    while (flag != 0) {
        auxiliar = 0
        resp = 1

        auxiliar = parseInt(prompt("Qual operação você deseja? ex. 1"))
        switch (auxiliar) {

            case 1: {
                for (let i = 0; i < 6; i++) {
                    resp += vetorPrincipal[i]
                }
                console.log(`A soma dos elementos é: ${resp}`)
                break;
            }

            case 2: {
                resp = 1
                for (let i = 0; i < 6; i++) {
                    resp = resp * vetorPrincipal[i]
                }
                console.log(`O produto dos elementos é: ${resp}`)
                break;
            }

            case 3: {
                for (let i = 0; i < 6; i++) {
                    resp = resp + vetorPrincipal[i]
                }
                resp = resp / vetorPrincipal.length
                console.log(`A média dos elementos é: ${resp}`)
                break;
            }

            case 4: {
                console.log(`Array ordenado: ${vetorSecundario.sort(sortfunction)}`)
                break;
            }

            case 5: {
                console.log(`Mostrando Vetor : ${vetorPrincipal}`)
                break;
            }

            case 0: {
                flag = 0
                break;
            }

        }

    }

    function sortfunction(a, b) {
        return (a - b)
    }

}
module.exports = exercicio38;
