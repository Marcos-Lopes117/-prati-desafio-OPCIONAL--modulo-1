function exercicio12() {
  console.log("Executando exercício 12\n");

  let a = 0;
  let b = 1;
  let resultado = 0;
  console.log("sequencia fibonacci de 10 algaritmos")
  console.log(b)

  for (let i = 2; i <= 10; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
    console.log(resultado)
  }

}
module.exports = exercicio12;


