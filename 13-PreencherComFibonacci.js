function exercicio13() {
  console.log("Executando exercício 13\n");

  let a = 0;
  let b = 1;
  let resultado = 0;
  let array = []
  console.log("sequencia fibonacci de 15 algaritmos")
  array.push(b)
  for (let i = 2; i <= 15; i++) {
    resultado = a + b;
    a = b;
    b = resultado;

    array.push(b)
  }

  console.log(array)

}
module.exports = exercicio13;