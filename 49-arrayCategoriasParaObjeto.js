function exercicio49() {
  console.log("Executando exercício 49\n");

  const transacoes = [
    { id: 1, valor: 100, data: "2025-01-01", categoria: "Alimentação" },
    { id: 2, valor: 50, data: "2025-01-02", categoria: "Transporte" },
    { id: 3, valor: 30, data: "2025-01-03", categoria: "Alimentação" },
    { id: 4, valor: 70, data: "2025-01-04", categoria: "Lazer" },
    { id: 5, valor: 20, data: "2025-01-05", categoria: "Transporte" }
  ];

  const agrupado = somarPorCategoria(transacoes);

  console.log(agrupado);

  function somarPorCategoria(transacoes) {
    const totais = {};

    for (let transacao of transacoes) {
      const { categoria, valor } = transacao;

      if (!totais[categoria]) {
        totais[categoria] = 0;
      }

      totais[categoria] += valor;
    }

    return totais;
  }

}
module.exports = exercicio49;