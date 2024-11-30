// script.js

// Seleciona os elementos necessários
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close');

// Abre o modal quando o botão "Cadastre-se" é clicado
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fecha o modal quando o ícone de fechar é clicado
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const matricula = document.getElementById('userMatricula').value;
    const senha = document.getElementById('password').value;

    const loginData = {
        matricula,
        senha
    };

    try {
        const response = await fetch('http://localhost:3000/cadastro/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('loginResponseMessage').textContent = result.message;
            document.getElementById('loginResponseMessage').style.color = 'green';

            // Armazenar a matrícula do usuário no localStorage após login bem-sucedido
            localStorage.setItem('userMatricula', matricula);  // Salva a matrícula no localStorage

            // Redireciona para a página de carrinho
            window.location.href = 'eventos.html';  // O usuário é redirecionado para o carrinho
        } else {
            throw new Error('Matrícula ou senha incorretos');
        }
    } catch (error) {
        document.getElementById('loginResponseMessage').textContent = error.message;
        document.getElementById('loginResponseMessage').style.color = 'red';
    }
});
