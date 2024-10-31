function createFooter() {
    const footer = document.createElement('footer');
  
    footer.innerHTML = `
      <div class="ajuda">
          <h2>Precisa de ajuda?</h2>
          <p>Fale conosco pelo WhatsApp</p>
          <a href="#" class="botao-whatsapp">
              <img src="img/icones/wpp.png" alt="WhatsApp"> Atendimento
          </a>
      </div>
  
      <div class="rodape-inferior">
          <div class="logo-e-direitos">
              <p>Powered by CORed © 2023</p>
              <p><a href="#">Termos de uso</a></p>
          </div>
          
          <div class="links">
              <a href="#">Sobre nós</a>
              <a href="#">Principios</a>
              <a href="#">política de privacidade</a>
          </div>
          
          <div class="redes-sociais">
              <a href="#"><img src="img/icones/instagram.png.png"></a>
              <a href="#"><img src="img/icones/linkedin (1).png" alt="LinkedIn"></a>
          </div>
      </div>
    `;
  
    document.body.appendChild(footer);
  }