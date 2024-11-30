document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Coleta os dados do formulário
    const usuario = {
        nome: document.getElementById('nomeCompleto').value,
        matricula: document.getElementById('matricula').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('phone').value,
        senha: document.getElementById('password').value,
    };

    // Envia os dados para o backend via fetch
    fetch('http://127.0.0.1:3000/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(data => {
        if (data && data.matricula) {
            alert('Cadastro realizado com sucesso!');
            // Redireciona para a página de login após o cadastro
            window.location.href = 'login.html';  // Substitua 'login.html' pelo caminho correto
        } else {
            alert('Erro ao cadastrar!');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro na conexão com o servidor ou na validação dos dados! Verifique se a Matricula ou email já esta cadastrados');
    });
});

// Validação do campo CPF para aceitar somente números e ter no máximo 11 dígitos
document.getElementById("matricula").addEventListener("input", function() {
    const matriculaInput = this;
    // Permite apenas números e limita a 4 dígitos
    matriculaInput.value = matriculaInput.value
        .replace(/\D/g, "") // Remove qualquer caractere que não seja um dígito
        .slice(0, 12); // Limita a entrada para os primeiros 4 dígitos
});
