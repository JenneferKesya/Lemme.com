
function logout() {
  // Remove a matrícula do usuário do localStorage
  localStorage.removeItem('userMatricula');
  
  // Opcional: exibir uma mensagem de confirmação
  alert('Você foi deslogado com sucesso!');

  // Redireciona para a página de login
  window.location.href = 'login.html';
}



function createHeader() {
  const header = document.createElement('header');

  header.innerHTML = `
      <div class="logo-e-filtro">
          <img src="img/ciclo.png" alt="Logo" class="logo">
          <div class="filtro">
              <!-- Removido o filtro de categoria e agora temos a matrícula e o botão de sair -->
              <div id="usuarioInfo">
                  <span id="usuarioLogado"></span> <!-- Matrícula do usuário -->
                  <button id="logoutBtn" onclick="logout()" style="display:none;">Sair</button> <!-- Botão de logout -->
              </div>
          </div>
      </div>

      <nav>
          <ul>
              <li><a href="index.html">Início</a></li>
              <li><a href="eventos.html">Eventos</a></li>
              <li><a href="produtos.html">Produtos</a></li>
              <li><a href="contatos.html">Contato</a></li>
              <li><a href="login.html">Login</a></li>
              <li>
                  <a href="carrinho.html" class="carrinho-link">
                      <img src="img/icones/carrinho.png" alt="carrinho" class="icone-carrinho">
                  </a>
              </li>
          </ul>
      </nav>
  `;

  document.body.insertAdjacentElement('afterbegin', header); // Insere o header no início do body

  // Função para exibir a matrícula do usuário logado e mostrar o botão de logout
  const userMatricula = localStorage.getItem('userMatricula');

  if (userMatricula) {
      console.log('Usuário logado:', userMatricula);  // Exibe a matrícula do usuário logado
      // Exibe a matrícula do usuário na página
      document.getElementById('usuarioLogado').textContent = `Matrícula do usuário: ${userMatricula}`;
      
      // Mostra o botão de logout
      document.getElementById('logoutBtn').style.display = 'block';
  } else {
      console.log('Usuário não logado');
      // Não redireciona para login, apenas permite visualizar os eventos
  }
}
