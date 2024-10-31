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
