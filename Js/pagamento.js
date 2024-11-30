// Exibe os itens do carrinho na página de pagamento
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('itensCarrinho');
    const totalDiv = document.getElementById('total');

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        let total = 0;
        carrinho.forEach(item => {
            const precoNumerico = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
            total += precoNumerico * item.quantidade;

            carrinhoContainer.innerHTML += `
                <div>
                    <h3>${item.nome}</h3>
                    <p>Preço: ${item.preco}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
            `;
        });

        totalDiv.innerHTML = `<h3>Total: R$ ${total.toFixed(2).replace('.', ',')}</h3>`;
    }
}

// Alterna os campos de pagamento conforme a forma de pagamento selecionada
function mostrarCamposPagamento(tipo) {
    // Esconde todos os campos de pagamento
    const camposCredito = document.getElementById('camposCredito');
    const camposDebito = document.getElementById('camposDebito');
    const camposBoleto = document.getElementById('camposBoleto');
    const camposPix = document.getElementById('camposPix');

    camposCredito.style.display = 'none';
    camposDebito.style.display = 'none';
    camposBoleto.style.display = 'none';
    camposPix.style.display = 'none';

    // Exibe os campos específicos de acordo com o tipo de pagamento
    if (tipo === 'credito') {
        camposCredito.style.display = 'block';
    } else if (tipo === 'debito') {
        camposDebito.style.display = 'block';
    } else if (tipo === 'boleto') {
        camposBoleto.style.display = 'block';
    } else if (tipo === 'pix') {
        camposPix.style.display = 'block';
    }
}

// Função que processa o pagamento
document.getElementById('formPagamento').addEventListener('submit', function (e) {
    e.preventDefault();  // Evita o envio do formulário

    const formaPagamento = document.querySelector('input[name="formaPagamento"]:checked');
    if (!formaPagamento) {
        alert('Por favor, selecione uma forma de pagamento!');
        return;
    }

    const tipoPagamento = formaPagamento.value;

    // Verifica se os campos para Cartão de Crédito ou Débito estão preenchidos
    if (tipoPagamento === 'credito' || tipoPagamento === 'debito') {
        const numeroCartao = document.querySelector(`#campos${tipoPagamento.charAt(0).toUpperCase() + tipoPagamento.slice(1)} input[placeholder="Número do cartão"]`).value;
        const nomeCartao = document.querySelector(`#campos${tipoPagamento.charAt(0).toUpperCase() + tipoPagamento.slice(1)} input[placeholder="Nome como no cartão"]`).value;
        const validade = document.querySelector(`#campos${tipoPagamento.charAt(0).toUpperCase() + tipoPagamento.slice(1)} input[placeholder="MM/AA"]`).value;
        const cvv = document.querySelector(`#campos${tipoPagamento.charAt(0).toUpperCase() + tipoPagamento.slice(1)} input[placeholder="CVV"]`).value;

        if (!numeroCartao || !nomeCartao || !validade || !cvv) {
            alert('Por favor, preencha todos os campos do cartão!');
            return;
        }
    }

    // Exibe a mensagem de sucesso
    document.getElementById('mensagemFinalizacao').style.display = 'block';
    
    // Limpa o carrinho e o localStorage
    localStorage.removeItem('carrinho');

    // Redireciona para a página inicial após um pequeno delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);  // Delay de 3 segundos antes do redirecionamento
});

// Inicializa a página
window.onload = carregarCarrinho;