function exercicio42() {
  console.log("Executando exercício 42\n");

  let dados = {
    id: 34,
    nome: "Yeshua",
    hobbies: ["correr", "ler", "cozinhar"],
    listaVeiculos: ["Carro", "Moto"],
    listaCategoriaCNH: ["A", "B"]
  };

  const arrayFiltrado = filtrarArray(dados)
  console.log(arrayFiltrado)

  function filtrarArray(obj) {
    const resultado = {};
    for (let chave in obj) {
      if (Array.isArray(obj[chave])) {
        resultado[chave] = obj[chave];
      }
    }
    return resultado;
  }

}
module.exports = exercicio42;