function exercicio25() {
    console.log("Executando exercício 25\n");

    let linha = []
    let somaDasColunas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 1; i < 16; i++) {
        linha[i] = []
        for (let j = 1; j < 21; j++) {
            linha[i][j] = parseInt(sorteioMaquina(0, 100));
            somaDasColunas[j - 1] += linha[i][j]
        }
    }
    console.table(linha)
    console.table(somaDasColunas)

    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
module.exports = exercicio25;
