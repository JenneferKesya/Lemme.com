// eventos.js

// Array com os eventos
const eventos = [
    {
        "id": 1,
        "titulo": "Campeonato de Judô",
        "data": "15 de Novembro",
        "horario": "09:00 às 12:00",
        "local": "Quadra esportiva Escola Teresiano",
        "preco": "R$ 150,00",
        "imagem": "img/campeonato-judo.jpg",
        "descricao": "Descrição detalhada sobre o Campeonato de Judô"
    },
    {
        "id": 2,
        "titulo": "Torneio de Xadrez",
        "data": "25 de Novembro",
        "horario": "14:00 às 17:00",
        "local": "Auditório 1 da Escola Teresiano",
        "preco": "R$ 80,00",
        "imagem": "img/campeonato-xadrez.jpg",
        "descricao": "Descrição detalhada sobre o Torneio de Xadrez."
    },
    {
        "id": 3,
        "titulo": "Campeonato de Tecido Acrobático",
        "data": "5 de Dezembro",
        "horario": "10:00 às 13:00",
        "local": "Quadra esportiva Escola Teresiano",
        "preco": "R$ 200,00",
        "imagem": "img/campeonato-tecido.jpg",
        "descricao": "Descrição detalhada sobre o Campeonato de Tecido Acrobático."
    }
];

// Armazena os eventos no localStorage se ainda não estiverem armazenados
if (!localStorage.getItem('eventos')) {
    localStorage.setItem('eventos', JSON.stringify(eventos));
}

async function fetchEventos() {
    try {
        const response = await fetch('http://localhost:3000/eventos');
        const eventos = await response.json();
        renderEventos(eventos);
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
    }
}

function formatarDataHora(data, hora) {
    const dataHoraString = `${data}T${hora}`; // Combina data e hora
    const dataHora = new Date(dataHoraString); // Cria um objeto Date
    
    // Formata a data separadamente
    const dataFormatada = dataHora.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Formata a hora separadamente
    const horaFormatada = dataHora.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Formato 24 horas
    });
    
    return { dataFormatada, horaFormatada }; // Retorna um objeto com data e hora separados
}

function renderEventos(eventos) {
    const cardsContainer = document.querySelector('.eventos');
    cardsContainer.innerHTML = ''; // Limpa o contêiner antes de renderizar

    eventos.forEach(evento => {
        const { dataFormatada, horaFormatada } = formatarDataHora(evento.data, evento.hora); // Chama a função formatarDataHora
        
        const card = `
           <a href="detalhes.html?id=${evento.evento_id}" class="evento"> 
                <img src="${evento.imagem}" alt="${evento.nome}">
                <div class="info-evento">
                    <h3>${evento.nome}</h3>
                    <p>Data: ${dataFormatada}</p>
                    <p>Horário: ${horaFormatada}</p>
                    <p class="local">Local: ${evento.local}</p>
                    <p class="preco">Valor: ${evento.taxaevento}</p>
                </div>
            </a>
        `;
        cardsContainer.innerHTML += card;
    });
}

fetchEventos();
