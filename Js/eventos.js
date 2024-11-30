
// Função para adicionar um evento ao carrinho
function adicionarAoCarrinho() {
    const eventoId = obterEventoId();  // Obtém o ID do evento da URL
    if (!eventoId) {
        alert("ID do evento não encontrado.");
        return;
    }

    fetch(`http://localhost:3000/eventos/${eventoId}`)
        .then(response => response.json())
        .then(evento => {
            console.log('Evento recebido:', evento);  // Log para verificar os dados do evento
            if (!evento) {
                alert('Evento não encontrado.');
                return;
            }
            const aluno_matricula = localStorage.getItem('userMatricula');  // Obtém a matrícula do aluno logado
            const itemCarrinho = {
                id: evento.evento_id,
                nome: evento.nome,
                preco: evento.taxaevento,
                quantidade: 1,  // Define a quantidade como 1 para eventos
                aluno_matricula: parseInt(aluno_matricula)
            };

            // Adiciona ao carrinho no localStorage
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            const index = carrinho.findIndex(item => item.id === itemCarrinho.id && item.aluno_matricula === itemCarrinho.aluno_matricula);
            if (index !== -1) {
                carrinho[index].quantidade += 1;
            } else {
                carrinho.push(itemCarrinho);
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            // Envia para o back-end
            return fetch('http://localhost:3000/carrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemCarrinho),
            });
        })
        .then(response => response.json())
        .then(data => {
            console.log('Evento adicionado ao carrinho:', data);
            alert(`${data.nome} foi adicionado ao carrinho!`);
        })
        .catch(error => {
            console.error('Erro ao adicionar evento ao carrinho:', error);
        });
}

// Função para obter o ID do evento da URL
function obterEventoId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
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
                <img src="http://localhost:3000/produtos/imagens/${evento.imagem}" alt="${evento.nome}">
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
