function exercicio41() {
  console.log("Executando exercício 41\n");
  
  // Objeto pessoa com as propriedades nome e idade
let pessoa = {
  nome: "João",
  idade: 30
};

// Acessando e imprimindo o valor da idade
console.log("Idade:", pessoa.idade);

// Adicionando uma nova propriedade chamada 'email'
pessoa.email = "joao@example.com";

// Imprimindo o objeto completo para verificar
console.log(pessoa);

}
module.exports = exercicio41;