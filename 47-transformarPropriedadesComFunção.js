function exercicio47() {
  console.log("Executando exercício 47\n");

  const dados = { a: 1, b: 2, c: 3 };
  //passando como parâmetro, uma função para dobrar o valor do objeto
  const dobrado = transformarObjeto(dados, valor => valor * 2);
  console.log(dobrado);

  //passando como parâmetro, função que concatena a chave ao valor
  const novo = transformarObjeto(dados, (valor, chave) => `${chave}: ${valor}`);
  console.log(novo);


  function transformarObjeto(obj, funcao) {
    const resultado = {};

    for (let chave in obj) {
      resultado[chave] = funcao(obj[chave], chave);
    }

    return resultado;
  }

}
module.exports = exercicio47;