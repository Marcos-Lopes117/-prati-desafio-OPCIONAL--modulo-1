function exercicio24() {
    console.log("Executando exercício 24\n");

    let linha = []
    let negativos = [0, 0, 0, 0, 0, 0]
    for (let i = 1; i < 7; i++) {
        linha[i] = []
        for (let j = 1; j < 9; j++) {
            linha[i][j] = parseInt(sorteioMaquina(-50, 50));
            if (linha[i][j] < 0) {
                negativos[i - 1] = negativos[i - 1] + 1
            }
        }
    }
    console.table(linha)
    console.table(negativos)

    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
module.exports = exercicio24;
