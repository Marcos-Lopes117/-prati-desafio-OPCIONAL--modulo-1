function exercicio45() {
  console.log("Executando exercício 45\n");

  const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
  const resultado = stringParaChave(frutas);
  console.log(resultado);

  function stringParaChave(array) {
    const contagem = {};

    for (let str of array) {
      if (contagem[str]) {
        contagem[str]++;
      } else {
        contagem[str] = 1;
      }
    }

    return contagem;
  }

}
module.exports = exercicio45;