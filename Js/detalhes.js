async function carregarDetalhesEvento() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = parseInt(urlParams.get('id')); // Obtém o ID do evento da URL

    try {
        // Faz uma requisição para o backend para obter os detalhes do evento
        const response = await fetch(`http://localhost:3000/eventos/${eventoId}`);

        if (!response.ok) {
            throw new Error("Erro ao buscar detalhes do evento.");
        }

        const evento = await response.json();

        if (!evento) {
            // Caso o evento não seja encontrado, você pode optar por uma mensagem genérica ou não fazer nada
            return;
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

        // Chama a função para formatar a data e hora
        const { dataFormatada, horaFormatada } = formatarDataHora(evento.data, evento.hora);

        // Atualiza o conteúdo da página com os detalhes do evento
        document.getElementById('imagem-evento').src = evento.imagem; // Ajuste conforme necessário
        document.getElementById('titulo-evento').innerText = evento.nome;
        document.getElementById('data-evento').innerText = `Data: ${dataFormatada}`;
        document.getElementById('horario-evento').innerText = `Horário: ${horaFormatada}`;
        document.getElementById('local-evento').innerText = `Local: ${evento.local}`;
        document.getElementById('preco-evento').innerText = `Valor: ${evento.taxaevento}`;
        document.getElementById('descricao-evento').innerText = evento.descricao;
        
    } catch {
        // Aqui você pode adicionar uma mensagem genérica para o usuário, se desejar
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDetalhesEvento);
