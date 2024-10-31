// Array de produtos
const produtos = [
    {
        id: 1,
        nome: "Chuteira",
        descricao: "",
        preco: "R$ 89,90",
        imagem: "img/chuteira.jpg",
        tamanhos: ["29-30", "30-31", "32-33", "34-35"],
        cores: ["Preto"],
    },
    {
        id: 2,
        nome: "Kit farda escolar",
        descricao: "",
        preco: "R$ 159,90",
        imagem: "img/farda.jpg",
        tamanhos: ["PP", "P", "M", "G"],
        cores: [ "Branco", "Preto"]
    },
    {
        id: 3,
        nome: "Faixa de Judô",
        descricao: "",
        preco: "R$ 89,90",
        imagem: "img/faixa.jpg",
        tamanhos: ["PP", "P", "M", "G"],
        cores: ["Azul", "Laranja", "Preto", "Branca", "Amarela"],
    },
    {
        id: 4,
        nome: "Kimono",
        descricao: "",
        preco: "R$ 99,90",
        imagem: "img/kimono.jpg",
        tamanhos: ["P", "M", "G"],
        cores: ["Azul", "Branco"],
    },
    {
        id: 5,
        nome: "Garrafa Termica",
        descricao: "",
        preco: "R$ 49,90",
        imagem: "img/Garrafa.jpg",
        cores: ["Rosa", "Azul", "Verde"],
    },
    
];

// Função para exibir os produtos na página
function exibirProdutos() {
    const produtosContainer = document.getElementById('produtosContainer');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <span>${produto.preco}</span>
            <button onclick="verDetalhes(${produto.id})">Ver Detalhes</button>
        `;

        produtosContainer.appendChild(produtoDiv);
    });
}

// Função para mostrar os detalhes do produto em um modal
function verDetalhes(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const produtoDetalhe = document.getElementById('produtoDetalhe');

    if (produto) {
        const tamanhosDisponiveis = produto.tamanhos.map(tamanho => `<option value="${tamanho}">${tamanho}</option>`).join('');
        const coresDisponiveis = produto.cores.map(cor => `<option value="${cor}">${cor}</option>`).join('');

        produtoDetalhe.innerHTML = `
            <h2>${produto.nome}</h2>
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.descricao}</p>
            <span>${produto.preco}</span>
            <div>
                <label for="tamanhos">Tamanho:</label>
                <select id="tamanhos">
                    ${tamanhosDisponiveis}
                </select>
            </div>
            <div>
                <label for="cores">Cor:</label>
                <select id="cores">
                    ${coresDisponiveis}
                </select>
            </div>
            <div>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" value="1" min="1" max="10">
            </div>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;

        abrirModal();
    }
}

// Função para adicionar ao carrinho (exemplo simples)
function adicionarAoCarrinho(produtoId) {
    const tamanho = document.getElementById('tamanhos').value;
    const cor = document.getElementById('cores').value;
    const quantidade = document.getElementById('quantidade').value;

    alert(`Produto ID: ${produtoId}, Tamanho: ${tamanho}, Cor: ${cor}, Quantidade: ${quantidade} adicionado ao carrinho!`);
}

// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById('detalheModal');
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('detalheModal');
    modal.style.display = "none";
}

// Chama a função para exibir os produtos ao carregar a página
window.onload = exibirProdutos;

