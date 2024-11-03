// Função para gerar os cards de eventos
function createEventCards(eventos) {
  const container = document.getElementById('event-container');
  container.innerHTML = ''; // Limpa o container antes de adicionar novos eventos

  eventos.forEach((evento) => { // Renomeei aqui para "evento"
      const card = document.createElement('div');
      card.classList.add('event-card');
      
      const img = document.createElement('img');
      img.src = evento.image; // Certifique-se de que 'image' exista no objeto retornado
      card.appendChild(img);
      
      const name = document.createElement('h3');
      name.textContent = evento.nome; // Aqui é onde você pega o nome do evento
      card.appendChild(name);
      
      const date = document.createElement('p');
      date.innerHTML = `<strong>Data:</strong> ${evento.evento_hora}`; // Ajuste para pegar a data correta
      card.appendChild(date);
      
      const time = document.createElement('p');
      time.innerHTML = `<strong>Horário:</strong> ${evento.hora}`; // Ajuste se necessário
      card.appendChild(time);
      
      const location = document.createElement('p');
      location.innerHTML = `<strong>Local:</strong> ${evento.local}`; // Ajuste se necessário
      card.appendChild(location);
      
      const price = document.createElement('p');
      price.innerHTML = `<strong>Valor:</strong> ${evento.taxaEvento}`; // Ajuste se necessário
      price.classList.add('price');
      card.appendChild(price);
      
      container.appendChild(card);
  });
}

// Chamar a função para buscar eventos em destaque quando a página carregar
document.addEventListener('DOMContentLoaded', fetchEventosEmDestaque);
