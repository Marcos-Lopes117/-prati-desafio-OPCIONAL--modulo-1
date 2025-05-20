function exercicio46() {
  console.log("Executando exercício 46\n");

  const vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Bruno", valor: 200 },
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Carlos", valor: 300 },
    { vendedor: "Bruno", valor: 50 }
  ];

  const resultado = somarVendasPorVendedor(vendas);

  console.log(resultado);

  function somarVendasPorVendedor(vendas) {
    const totalPorVendedor = {};

    for (let venda of vendas) {
      const { vendedor, valor } = venda;

      if (totalPorVendedor[vendedor]) {
        totalPorVendedor[vendedor] += valor;
      } else {
        totalPorVendedor[vendedor] = valor;
      }
    }

    return totalPorVendedor;
  }

}
module.exports = exercicio46;