function exercicio48() {
  console.log("Executando exercício 48\n");

  const inventarioLojaA = {
    maçã: 10,
    banana: 5,
    laranja: 8
  };

  const inventarioLojaB = {
    banana: 7,
    abacaxi: 3,
    maçã: 2
  };

  const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

  console.log(inventarioCombinado)

  function combinarInventarios(inventarioA, inventarioB) {
    const inventarioFinal = { ...inventarioA };

    for (let item in inventarioB) {
      if (inventarioFinal[item]) {
        inventarioFinal[item] += inventarioB[item];
      } else {
        inventarioFinal[item] = inventarioB[item];
      }
    }

    return inventarioFinal;
  }

}
module.exports = exercicio48;

