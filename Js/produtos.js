document.addEventListener("DOMContentLoaded", function() {
    const produtosContainer = document.getElementById("produtosContainer");

    // Fetch para buscar os produtos da API
    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Verifique a estrutura dos dados retornados
            data.forEach(produto => {
                const produtoDiv = document.createElement("div");
                produtoDiv.className = "produto";
                produtoDiv.innerHTML = `
                    <h3>${produto.nome_produto}</h3>
                    <p>${produto.descricao_produto}</p>
                    <span>${produto.preco_produto}</span> <!-- Removido "R$" manual -->
                    <img src="http://localhost:3000/produtos/imagens/${produto.imagem}" alt="${produto.nome_produto}" />
                    <button onclick="verDetalhes(${produto.produto_id})">Ver Detalhes</button>
                `;
                produtosContainer.appendChild(produtoDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar produtos:", error);
        });
});

function verDetalhes(produtoId) {
    // Fetch para buscar os detalhes do produto pelo ID
    fetch(`http://localhost:3000/produtos/${produtoId}`)
        .then(response => response.json())
        .then(produto => {
            const produtoDetalhe = document.getElementById('produtoDetalhe');

            if (produto) {
                // Criar opções de tamanho dinamicamente
                const tamanhosDisponiveis = produto.tamanho_opcoes
                    ? produto.tamanho_opcoes.map(t => `<option value="${t}">${t}</option>`).join('')
                    : '<option value="">N/A</option>';

                // Criar opções de cor dinamicamente
                const coresDisponiveis = produto.cor_opcoes
                    ? produto.cor_opcoes.map(c => `<option value="${c}">${c}</option>`).join('')
                    : '<option value="">N/A</option>';

                produtoDetalhe.innerHTML = `
                    <h2>${produto.nome_produto}</h2>
                    <img src="http://localhost:3000/produtos/imagens/${produto.imagem}" alt="${produto.nome_produto}">
                    <p>${produto.descricao_produto}</p>
                    <span>${produto.preco_produto}</span> <!-- Removido "R$" manual -->
                    <div>
                        <label for="tamanhos">Tamanho:</label>
                        <select id="tamanhos">${tamanhosDisponiveis}</select>
                    </div>
                    <div>
                        <label for="cores">Cor:</label>
                        <select id="cores">${coresDisponiveis}</select>
                    </div>
                    <div>
                        <label for="quantidade">Quantidade:</label>
                        <input type="number" id="quantidade" value="1" min="1" max="10">
                    </div>
                    <button onclick="adicionarAoCarrinho(${produto.produto_id})">Adicionar ao Carrinho</button>
                `;

                abrirModal();
            } else {
                alert('Produto não encontrado.');
            }
        })
        .catch(error => {
            console.error("Erro ao buscar detalhes do produto:", error);
        });
}

// Função para adicionar um produto ao carrinho
// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const tamanho = document.getElementById('tamanhos').value;
    const cor = document.getElementById('cores').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    fetch(`http://localhost:3000/produtos/${produtoId}`)
        .then(response => response.json())
        .then(produto => {
            const aluno_matricula = localStorage.getItem('userMatricula');  // Obtém a matrícula do aluno logado
            const itemCarrinho = {
                id: produto.produto_id,
                nome: produto.nome_produto,
                preco: produto.preco_produto,
                quantidade: quantidade,
                tamanho: tamanho,
                cor: cor,
                aluno_matricula: parseInt(aluno_matricula)
            };

            // Adiciona ao carrinho no localStorage
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            const index = carrinho.findIndex(item => item.id === itemCarrinho.id && item.aluno_matricula === itemCarrinho.aluno_matricula);
            if (index !== -1) {
                carrinho[index].quantidade += quantidade;
            } else {
                carrinho.push(itemCarrinho);
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            // Envia para o back-end
            return fetch('http://localhost:3000/carrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemCarrinho),
            });
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto adicionado ao carrinho:', data);
            alert(`Produto ID: ${produtoId}, Tamanho: ${tamanho}, Cor: ${cor}, Quantidade: ${quantidade} adicionado ao carrinho!`);
        })
        .catch(error => {
            console.error('Erro ao adicionar produto ao carrinho:', error);
        });
}


// Funções para abrir e fechar modais
function abrirModal() {
    const modal = document.getElementById('detalheModal');
    modal.style.display = "block";
}

function fecharModal() {
    const modal = document.getElementById('detalheModal');
    modal.style.display = "none";
}
