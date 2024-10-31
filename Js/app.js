// Array de produtos
const products = [
  { name: "Chuteira", price: "R$ 89,90", image: "img/chuteira.jpg" },
  { name: "Faixa de judô", price: "R$ 89,90", image: "img/faixa.jpg" },
 
];

// Função para gerar os cards
function createProductCards() {
  const container = document.getElementById('product-container');
  
  products.forEach((product) => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      
      const img = document.createElement('img');
      img.src = product.image;
      card.appendChild(img);
      
      const name = document.createElement('h3');
      name.textContent = product.name;
      card.appendChild(name);
      
      const priceLabel = document.createElement('p');
      priceLabel.textContent = "A partir de";
      card.appendChild(priceLabel);

      const price = document.createElement('p');
      price.textContent = product.price;
      price.classList.add('price');
      card.appendChild(price);
      
      container.appendChild(card);
  });
}

// Chamar a função para gerar os cards
createProductCards();
