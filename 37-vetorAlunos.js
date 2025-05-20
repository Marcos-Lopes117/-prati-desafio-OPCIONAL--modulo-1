function exercicio37() {
    console.log("Executando exercício 37\n");

    const prompt = require("prompt-sync")()
    let vetorGabarito = []
    let respostas = []
    let acertos = []
    let nomes = []
    let resp = []
    let aux
    let numeroDeQuestões = 20
    let quantidadeDeAlunos = 50

    //insere gabarito
    console.log("Inserção do gabarito:")
    for (let i = 0; i < numeroDeQuestões; i++) {
        aux = prompt(`Digire a resposta da ${i + 1}º questão: ex. A, B, C, D ou E`)
        vetorGabarito[i] = aux.toUpperCase()
    }
    console.log("Gabarito atualizado.\n")

    //insere notas dos alunos
    console.log("inserção das respostas dos alunos:")
    for (let i = 0; i < quantidadeDeAlunos; i++) {
        nomes[i] = prompt(`Digire seu nome:`)
        acertos[i] = 0
        console.log(`${i + 1}° aluno:`)
        for (let j = 0; j < numeroDeQuestões; j++) {
            aux = prompt(`Digire a resposta da ${j + 1}º questão: ex. A, B, C, D ou E`)
            resp[j] = aux.toUpperCase()
            if (vetorGabarito[j] === resp[j]) {
                acertos[i]++
            }
        }
        respostas[i] = resp
    }

    for (let i = 0; i < nomes.length; i++) {
        if (acertos[i] >= 12) {
            aux = "aprovado"
        }
        else {
            aux = "reprovado"
        }
        console.log(`O aluno ${nomes[i]} acertou ${acertos[i]} questões, sua situação é ${aux}. `)
    }

}
module.exports = exercicio37;

