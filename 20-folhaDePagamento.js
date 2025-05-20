function exercicio20() {
  console.log("Executando exercício 20\n");

  const prompt = require('prompt-sync')();
  let matricula
  let nome
  let salarioBruto
  let salarioLiquido
  let descontoINSS
  let funcionarios = [];

  for (let i = 0; i < 80; i++) {
    matricula = prompt(`Digite a matrícula do ${i + 1}º funcionário:`);
    nome = prompt(`Digite o nome do ${i + 1}º funcionário:`);
    salarioBruto = parseFloat(prompt(`Digite o salário bruto de ${nome}:`));
    funcionarios.push({ matricula, nome, salarioBruto });
  }

  console.log("Contracheques:");


  funcionarios.forEach(funcionario => {
    descontoINSS = funcionario.salarioBruto * 0.12; 0
    salarioLiquido = funcionario.salarioBruto - descontoINSS;
    console.log(`____________________________________________________________`)
    console.log(`\nMatrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
  });

}
module.exports = exercicio20;