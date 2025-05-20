function exercicio43() {
    console.log("Executando exercício 43\n");

    let obj1 = {
        nome: "Marcos",
        idade: 30,
        cidade: "Rio de Janeiro"
    };

    let obj2 = {
        idade: 35,
        profissao: "Desenvolvedor"
    };

    const objetoCombinado = combinarObjetos(obj1, obj2);

    console.log(objetoCombinado);

    function combinarObjetos(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }

}
module.exports = exercicio43;