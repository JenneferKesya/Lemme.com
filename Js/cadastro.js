// Alterna entre formulários de cadastro e login
function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const cadastroContainer = document.getElementById('cadastro-container');
    
    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        cadastroContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        cadastroContainer.style.display = "block";
    }
}

// Exibe o formulário de recuperação de senha
function showRecovery() {
    const loginContainer = document.getElementById('login-container');
    const recContainer = document.getElementById('recuperacao-container');

    loginContainer.style.display = "none";
    recContainer.style.display = "block";
}

// Validação do formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const nomeInput = document.getElementById('nome');
    const cpfInput = document.getElementById('cpf');
    const nomeErro = document.getElementById('nome-erro');
    const cpfErro = document.getElementById('cpf-erro');
    
    let valid = true;

    // Validação do nome (somente letras)
    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!nomeRegex.test(nomeInput.value)) {
        nomeErro.style.display = 'block';
        valid = false;
    } else {
        nomeErro.style.display = 'none';
    }

    // Validação do CPF (somente números)
    const cpfRegex = /^[0-9]+$/;
    if (!cpfRegex.test(cpfInput.value)) {
        cpfErro.style.display = 'block';
        valid = false;
    } else {
        cpfErro.style.display = 'none';
    }

    // Se houver erros, impedir o envio do formulário
    if (!valid) {
        event.preventDefault();
    }
});

// Função que impede a digitação de números no campo de nome
function apenasLetras(e) {
    const charCode = e.charCode ? e.charCode : e.keyCode;
    
    // Permite letras, espaços e acentuação
    if ((charCode >= 65 && charCode <= 90) || // Letras maiúsculas
        (charCode >= 97 && charCode <= 122) || // Letras minúsculas
        (charCode >= 192 && charCode <= 255) || // Letras acentuadas
        charCode === 32) { // Espaço
        return true;
    }
    return false;
}

// Função que impede a digitação de letras no campo de CPF (somente números)
function apenasNumeros(e) {
    const charCode = e.charCode ? e.charCode : e.keyCode;
    
    // Permite apenas números (0-9)
    if (charCode >= 48 && charCode <= 57) {
        return true;
    }
    return false;
}
