function exercicio16() {
    console.log("Executando exercício 16\n");

    const prompt = require('prompt-sync')();
    let array = []
    let resposta
    console.log("criação e ordenação de array.")
    for (let i = 1; i <= 20; i++) {
        resposta = sorteioMaquina(0, 99)
        array.push(resposta)
    }

    console.log("Array criado:\n", array)
    array.sort(sortfunction);
    console.log("Array ordenado:\n", array)

    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function sortfunction(a, b) {
        return (a - b)
    }

}
module.exports = exercicio16;


