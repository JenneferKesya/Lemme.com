function exibirCarrinho() {
    const carrinhoContainer = document.getElementById('carrinhoContainer');
    const totalDiv = document.getElementById('total');

    // Defina o valor de aluno_matricula para o usuário atual
    const aluno_matricula = localStorage.getItem('userMatricula');  // Exemplo: matrícula 25

    fetch(`http://localhost:3000/carrinho?aluno_matricula=${aluno_matricula}`)
        .then(response => response.json())
        .then(carrinho => {
            carrinhoContainer.innerHTML = '';

            if (carrinho.length === 0) {
                carrinhoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
            } else {
                let total = 0;
                carrinho.forEach((item, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('item-carrinho');

                    itemDiv.innerHTML = `
                        <h3>${item.nome}</h3>
                        <p>Preço: ${item.preco}</p>
                        <p>Quantidade: ${item.quantidade}</p>
                        <button onclick="removerDoCarrinho(${item.id})">Remover</button>
                    `;

                    carrinhoContainer.appendChild(itemDiv);

                    const precoNumerico = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
                    total += precoNumerico * item.quantidade;
                });

                totalDiv.innerHTML = `<h3>Total: R$ ${total.toFixed(2).replace('.', ',')}</h3>`;
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o carrinho:", error);
        });
}

function removerDoCarrinho(id) {
    fetch(`http://localhost:3000/carrinho/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        exibirCarrinho();
    })
    .catch(error => {
        console.error("Erro ao remover item do carrinho:", error);
    });
}

window.onload = exibirCarrinho;
