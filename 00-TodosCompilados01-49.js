const prompt = require('prompt-sync')();

const exercicios = {
    1: require('./01-reduçãoFumante.js'),
    2: require('./02-MultaDeTransito.js'),
    3: require('./03-PassagemPorKM.js'),
    4: require('./04-verificaTriangulo.js'),
    5: require('./05-pedraPapelTesoura.js'),
    6: require('./06-Sorteio1a5.js'),
    7: require('./07-aluguelDeCarro.js'),
    8: require('./08-vidaSaldavel.js'),
    9: require('./09-salarioSexo.js'),
    10: require('./10-somatorio.js'),
    11: require('./11-progressãoAritimética.js'),
    12: require('./12-fibonacci.js'),
    13: require('./13-PreencherComFibonacci.js'),
    14: require('./14-arrayNome.js'),
    15: require('./15-vetorInteiros.js'),
    16: require('./16-ordenarValores.js'),
    17: require('./17-nomeIdade.js'),
    18: require('./18-NomeCargoSalario.js'),
    19: require('./19-validaHorário.js'),
    20: require('./20-folhaDePagamento.js'),
    21: require('./21-pesoIdeal.js'),
    22: require('./22-funcaoSalarioFilhos.js'),
    23: require('./23-matrizDiagonalENull.js'),
    24: require('./24-matriz6x8.js'),
    25: require('./25-matrizSomaColuna.js'),
    26: require('./26-produtoMatriz.js'),
    27: require('./27-matrizParaVetor.js'),
    28: require('./28-somaDiagonalMatriz.js'),
    29: require('./29-operaçoesNaMatriz.js'),
    30: require('./30-matriz2vetores.js'),
    31: require('./31-verificaNaMatriz.js'),
    32: require('./32-matrizPorModulo.js'),
    33: require('./33-matriz3x3.js'),
    34: require('./34-matriz50x50.js'),
    35: require('./35-vetoresParImpar.js'),
    36: require('./36-loteriaVetor.js'),
    37: require('./37-vetorAlunos.js'),
    38: require('./38-contasVetor6.js'),
    39: require('./39-vetorRemoveNulo.js'),
    40: require('./40-loteria5de50.js'),
    41: require('./41-objetoPessoa.js'),
    42: require('./42-propriedadesObjetos.js'),
    43: require('./43-CombinaObjetos.js'),
    44: require('./44-contarStringDeObjetos.js'),
    45: require('./45-stringArrayParaChaveDeObjeto.js'),
    46: require('./46-contaVendasPorObjeto.js'),
    47: require('./47-transformarPropriedadesComFunção.js'),
    48: require('./48-somandoInventarioDeObjetos.js'),
    49: require('./49-arrayCategoriasParaObjeto.js'),
    50: require('./50-ProjetoHotel.js')
};
let flag = true

while(flag){

    console.log("\n____________MENU PRINCIPAL____________\n")
    console.log("Digite o número do exercício que voce deseja")
    console.log("de 1 a 49.")
    const numero = parseInt(prompt("ou Digite 0 para sair?"))
    
    if(numero==0){
        flag = false
    }

    if (exercicios[numero]) {
        exercicios[numero]();
    } else {
        console.log("Exercício não encontrado, tente novamente:");
    }
    
}