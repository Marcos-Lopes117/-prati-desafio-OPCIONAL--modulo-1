function exercicio36() {
    console.log("Executando exercício 36\n");

    const prompt = require("prompt-sync")()
    let objeto = {}
    let resultadoLoteria = []
    //gera o objeto com 100 apostadores e suas apostas
    gerarObjetoComNomesEVetores();
    //gera o resultado da loteria
    geraResultados();
    //ordena os vetores do objeto
    objeto = ordenarVetoresDoObjeto(objeto)
    //ordena o vetor da loteria
    resultadoLoteria = ordenarVetor(resultadoLoteria)
    //imprime o objeto e o resultado
    console.log("Apostadores: ", objeto)
    console.log("Resultado da loteria", resultadoLoteria)
    //verifica se há ganhadores e imprime o resultado
    verificaGanhadores(objeto, resultadoLoteria)

    function gerarObjetoComNomesEVetores() {
        for (let i = 1; i <= 100; i++) {
            const id = i
            const vetor = gerarNumerosUnicos(13, 0, 15)
            objeto[id] = vetor
        }
    }
    function geraResultados() {
        for (let i = 0; i < 13; i++) {
            resultadoLoteria = gerarNumerosUnicos(13, 0, 15)
        }
    }
    function ordenarVetoresDoObjeto(obj) {
        const objetoOrdenado = {};

        for (let nome in objeto) {
            // Clona e ordena o vetor
            objetoOrdenado[nome] = [...objeto[nome]].sort((a, b) => a - b);
        }

        return objetoOrdenado;
    }
    function ordenarVetor(vetor) {
        return [...vetor].sort((a, b) => a - b);
    }
    function gerarNumerosUnicos(quantidade, min, max) {
        const numeros = new Set();
        while (numeros.size < quantidade) {
            const numero = Math.floor(Math.random() * (max - min + 1)) + min;
            numeros.add(numero);
        }
        return Array.from(numeros);
    }
    function verificaGanhadores(objeto, vetorParaComparar) {
        for (let chave in objeto) {
            const vetorAtual = objeto[chave];
            if (vetoresSaoIguais(vetorAtual, vetorParaComparar)) {
                console.log("Vencedor de ID: ", chave, "\n Aposta :", vetorAtual)
                return true;
            }
        }
        console.log("Não teve ganhadores!")
        return false;
    }
    // Função auxiliar para comparar dois vetores (mesmos elementos na mesma ordem)
    function vetoresSaoIguais(v1, v2) {
        if (v1.length !== v2.length) return false;

        for (let i = 0; i < v1.length; i++) {
            if (v1[i] !== v2[i]) return false;
        }

        return true;
    }

}
module.exports = exercicio36;
