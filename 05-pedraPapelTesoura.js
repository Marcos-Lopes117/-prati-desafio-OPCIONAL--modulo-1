function exercicio5() {
    console.log("Executando exercício 5\n");

    const prompt = require('prompt-sync')();
    let resposta = 4
    let escolhaMaquina
    let pontosMaquina = 0
    let pontosJogador = 0
    console.log("________________________")
    console.log("|Pedra, papel e tesoura.|")
    console.log("________________________\n")
    while (resposta != 0) {

        console.log("digite [1]para pedra, [2]para papel, [3]para tesoura e [0]para sair.")
        resposta = parseInt(prompt("Qual opção você escolhe?"))
        if (resposta == 0) {
            break;
        }

        escolhaMaquina = sorteioMaquina(1, 3);

        switch (resposta) {
            case 1: {
                if (escolhaMaquina == 1) {
                    console.log("___________________________________")
                    console.log("a máquina também escolheu pedra.")
                    console.log("Empate!")
                    console.log("___________________________________\n")
                }
                else if (escolhaMaquina == 2) {
                    console.log("___________________________________")
                    console.log("a máquina escolheu papel.")
                    console.log("você perdeu essa rodada.")
                    console.log("___________________________________\n")
                    pontosMaquina += 1
                }
                else {
                    console.log("___________________________________")
                    console.log("a máquina escolheu tesoura.")
                    console.log("você venceu essa rodada.")
                    console.log("___________________________________\n")
                    pontosJogador += 1
                }
                break;
            }
            case 2: {
                if (escolhaMaquina == 1) {
                    console.log("___________________________________")
                    console.log("a máquina escolheu pedra.")
                    console.log("você ganhou essa rodada.")
                    console.log("___________________________________\n")
                    pontosJogador += 1

                }
                else if (escolhaMaquina == 2) {
                    console.log("___________________________________")
                    console.log("a máquina tambem escolheu papel.")
                    console.log("Empate!")
                    console.log("___________________________________\n")
                }
                else {
                    console.log("___________________________________")
                    console.log("a máquina escolheu tesoura.")
                    console.log("você perdeu essa rodada.")
                    console.log("___________________________________\n")
                    pontosMaquina += 1
                }
                break;
            }
            case 3: {

                if (escolhaMaquina == 1) {
                    console.log("___________________________________")
                    console.log("a máquina escolheu pedra.")
                    console.log("você perdeu essa rodada.")
                    console.log("___________________________________\n")
                    pontosMaquina += 1

                }
                else if (escolhaMaquina == 2) {
                    console.log("___________________________________")
                    console.log("a máquina escolheu papel.")
                    console.log("Você ganhou essa rodada!")
                    console.log("___________________________________\n")
                    pontosJogador += 1
                }
                else {
                    console.log("___________________________________")
                    console.log("a também máquina escolheu tesoura.")
                    console.log("empate.")
                    console.log("___________________________________\n")
                }

                break;
            }
        }


    }
    console.log("___________________________________")
    console.log("|---------PLACAR FINAL:------------|")
    console.log("___________________________________\n")
    if (pontosJogador > pontosMaquina) {
        console.log("Você venceu!")

        console.log(pontosJogador, "x", pontosMaquina)
    }
    else if (pontosJogador < pontosMaquina) {
        console.log("Você perdeu!")
        console.log(pontosJogador, "x", pontosMaquina)
    }
    else {
        console.log("Empate!")
        console.log(pontosJogador, "x", pontosMaquina)
    }

    function sorteioMaquina(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
module.exports = exercicio5;