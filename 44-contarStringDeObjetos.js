function exercicio44() {
    console.log("Executando exercício 44\n");

    const pessoa = {
        nome: "Marcos",
        idade: 30,
        cidade: "São Paulo",
        ativo: true,
        email: "m.vd2prog@gmail.com"
    };
    const totalStrings = contarStrings(pessoa);
    console.log("Total de propriedades do tipo string:", totalStrings);

    function contarStrings(obj) {
        let contador = 0;
        for (let chave in obj) {
            if (typeof obj[chave] === 'string') {
                contador++;
            }
        }

        return contador;
    }

}
module.exports = exercicio44;