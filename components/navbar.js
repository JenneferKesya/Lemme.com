function createHeader() {
    const header = document.createElement('header');
  
    header.innerHTML = `
      <div class="logo-e-filtro">
        <img src="img/ciclo.png" alt="Logo" class="logo">
        <div class="filtro">
            <label for="categoria">Filtro:</label>
            <select id="categoria">
                <option value="Geral">Para público geral</option>
                <option value="Alunos">Para alunos (as) Teresianos</option>
            </select>
        </div>
      </div>
  
      <nav>
        <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="produtos.html">Produtos</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li>
                <a href="carrinho.html" class="carrinho-link">
                    <img src="img/icones/carrinho.png" alt="carrinho" class="icone-carrinho">
                </a>
             </li>
        </ul>
      </nav>
    `;
  
    document.body.insertAdjacentElement('afterbegin', header); // Insere o header no início do body
  }
  