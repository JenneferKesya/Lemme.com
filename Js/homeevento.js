// Array de eventos
const events = [
    {
      name: "Campeonato de Judô",
      date: "15 de Novembro",
      time: "09:00 às 12:00",
      location: "Quadra esportiva Escola Teresiano",
      price: "R$ 150,00",
      image: "img/campeonato-judo.jpg"
    },
    {
        name: "Campeonato de xadrez",
        date: "25 de Novembro",
        time: "08:00 às 11:00",
        location: "Quadra esportiva Escola GGE",
        price: "R$ 20,00",
        image: "img/campeonato-xadrez.jpg"
      }
  ];
  
  // Função para gerar os cards de eventos
  function createEventCards() {
    const container = document.getElementById('event-container');
    
    events.forEach((event) => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        
        const img = document.createElement('img');
        img.src = event.image;
        card.appendChild(img);
        
        const name = document.createElement('h3');
        name.textContent = event.name;
        card.appendChild(name);
        
        const date = document.createElement('p');
        date.innerHTML = `<strong>Data:</strong> ${event.date}`;
        card.appendChild(date);
        
        const time = document.createElement('p');
        time.innerHTML = `<strong>Horário:</strong> ${event.time}`;
        card.appendChild(time);
        
        const location = document.createElement('p');
        location.innerHTML = `<strong>Local:</strong> ${event.location}`;
        card.appendChild(location);
        
        const price = document.createElement('p');
        price.innerHTML = `<strong>Valor:</strong> ${event.price}`;
        price.classList.add('price');
        card.appendChild(price);
        
        container.appendChild(card);
    });
  }
  
  // Chamar a função para gerar os cards de eventos
  createEventCards();
  