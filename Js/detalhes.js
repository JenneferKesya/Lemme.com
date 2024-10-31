
// detalhes.js

function carregarDetalhesEvento() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = parseInt(urlParams.get('id')); // Obtém o ID do evento da URL

    try {
        // Carrega os eventos do localStorage
        const eventos = JSON.parse(localStorage.getItem('eventos')); // Obtém eventos do localStorage

        if (!eventos) {
            console.error("Nenhum evento encontrado no localStorage.");
            alert("Nenhum evento encontrado.");
            return;
        }

        const evento = eventos.find(e => e.id === eventoId); // Encontra o evento com o ID correspondente

        if (evento) {
            // Atualiza o conteúdo da página com os detalhes do evento
            document.getElementById('imagem-evento').src = evento.imagem;
            document.getElementById('titulo-evento').innerText = evento.titulo;
            document.getElementById('data-evento').innerText = `Data: ${evento.data}`;
            document.getElementById('horario-evento').innerText = `Horário: ${evento.horario}`;
            document.getElementById('local-evento').innerText = `Local: ${evento.local}`;
            document.getElementById('preco-evento').innerText = `Valor: ${evento.preco}`;
            document.getElementById('descricao-evento').innerText = evento.descricao;
        } else {
          
        }
    } catch (error) {
        console.error("Erro ao carregar os detalhes do evento:", error);
        alert("Não foi possível carregar os detalhes do evento. Tente novamente mais tarde.");
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDetalhesEvento);
