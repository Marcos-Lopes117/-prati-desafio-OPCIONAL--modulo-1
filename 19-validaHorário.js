function exercicio19() {
    console.log("Executando exercício 19\n");

    const prompt = require('prompt-sync')();
    let horario = 0
    let valida = []
    let valido = true
    let horarioValido = []
    let erroLog = ""
    console.log("Validação de horário.")
    for (let i = 1; i <= 5; i++) {
        valido = true
        horario = prompt("Digite um horário no formato HH:MM:SS, ex. 10:09:34 :")
        valida = horario.split(":")
        if (valida.length != 3) {
            erroLog += ("Formato invalido\n")
            valido = false
        }

        for (let j = 0; j <= valida.length; j++) {
            switch (j) {
                case 0:
                    if ((valida[j] > 23) || (valida[j] < 0)) {
                        erroLog += ("Horas inválidas\n")
                        valido = false
                    }
                    break;
                case 1:
                    if ((valida[j] > 59) || (valida[j] < 0)) {
                        erroLog += ("Minutos inválidos\n")
                        valido = false
                    }
                    break;
                case 2:
                    if ((valida[j] > 59) || (valida[j] < 0)) {
                        erroLog += ("Segundos inválidas\n")
                        valido = false
                    }
                    break;
            }
        }
        if (valido) {
            horarioValido.push(horario)
        }
        else {
            console.log(erroLog)
            erroLog = ""
        }
    }
    console.log("Os Horários válidos foram:")
    console.table(horarioValido)

}
module.exports = exercicio19;

