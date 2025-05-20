function exercicio23() {
    console.log("Executando exercício 23\n");

    let linha = []
    for (let i = 1; i < 8; i++) {
        linha[i] = []
        for (let j = 1; j < 8; j++) {

            if (i == j) {
                linha[i][j] = 1
            }
            else {
                linha[i][j] = null
            }
        }
    }
    console.table(linha)

}
module.exports = exercicio23;