const hoteis = [];
const reservas = [];
let contadorIdHotel = 1;
let contadorIdReserva = 1;

// Comandos para utilizar o sistema
//adicionarHotel("Hotel Mar Azul", "Rio de Janeiro", 10);
// adicionarHotel("Pousada da Serra", "Gramado", 5);
// buscarHoteisPorCidade("Rio de Janeiro");
// fazerReserva(1, "João da Silva");
// fazerReserva(2, "Maria Oliveira");
// listarReservas();
// cancelarReserva(1);
// avaliarHotel(1, 5, "Excelente hotel!");
// mostrarAvaliacoes(1);
// relatorioOcupacao(1);



// adicionar hotel
function adicionarHotel(nome, cidade, quartosTotais) {
  const hotel = {
    id: contadorIdHotel++,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
    avaliacoes: []
  };
  hoteis.push(hotel);
  console.log("Hotel adicionado:", hotel);
}

//buscar hotéis por cidade
function buscarHoteisPorCidade(cidade) {
  const encontrados = hoteis.filter(h => h.cidade.toLowerCase() === cidade.toLowerCase());
  if (encontrados.length === 0) {
    console.log("Nenhum hotel encontrado nessa cidade.");
  } else {
    console.log("Hotéis encontrados:");
    encontrados.forEach(h => {
      console.log(`ID: ${h.id}, Nome: ${h.nome}, Quartos disponíveis: ${h.quartosDisponiveis}`);
    });
  }
}

//fazer reserva
function fazerReserva(idHotel, nomeCliente) {
  const hotel = hoteis.find(h => h.id === idHotel);
  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }
  if (hotel.quartosDisponiveis > 0) {
    hotel.quartosDisponiveis--;
    const reserva = {
      idReserva: contadorIdReserva++,
      idHotel: hotel.id,
      nomeCliente
    };
    reservas.push(reserva);
    console.log("Reserva realizada com sucesso:", reserva);
  } else {
    console.log("Não há quartos disponíveis neste hotel.");
  }
}

//cancelar reserva
function cancelarReserva(idReserva) {
  const index = reservas.findIndex(r => r.idReserva === idReserva);
  if (index === -1) {
    console.log("Reserva não encontrada.");
    return;
  }
  const reserva = reservas[index];
  const hotel = hoteis.find(h => h.id === reserva.idHotel);
  if (hotel) hotel.quartosDisponiveis++;
  reservas.splice(index, 1);
  console.log("Reserva cancelada com sucesso.");
}

//listar todas as reservas
function listarReservas() {
  if (reservas.length === 0) {
    console.log("Nenhuma reserva feita.");
    return;
  }
  reservas.forEach(r => {
    const hotel = hoteis.find(h => h.id === r.idHotel);
    console.log(`Reserva ID: ${r.idReserva}, Cliente: ${r.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
  });
}

//Avaliar hotel
function avaliarHotel(idHotel, nota, comentario) {
  const hotel = hoteis.find(h => h.id === idHotel);
  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }
  hotel.avaliacoes.push({ nota, comentario });
  console.log("Avaliação registrada com sucesso.");
}

//Relatório de ocupação
function relatorioOcupacao(idHotel) {
  const hotel = hoteis.find(h => h.id === idHotel);
  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }
  const ocupados = hotel.quartosTotais - hotel.quartosDisponiveis;
  const taxaOcupacao = ((ocupados / hotel.quartosTotais) * 100).toFixed(2);
  console.log(`Hotel: ${hotel.nome} - Ocupação: ${taxaOcupacao}%`);
}

//Mostrar avaliações
function mostrarAvaliacoes(idHotel) {
    const hotel = hoteis.find(h => h.id === idHotel);
    if (!hotel) {
      console.log("Hotel não encontrado.");
      return;
    }
  
    if (hotel.avaliacoes.length === 0) {
      console.log("Esse hotel ainda não possui avaliações.");
      return;
    }
  
    console.log(`Avaliações do Hotel "${hotel.nome}":`);
    hotel.avaliacoes.forEach((a, index) => {
      console.log(`#${index + 1} - Nota: ${a.nota}/5`);
      console.log(`Comentário: ${a.comentario}\n`);
    });
  }


