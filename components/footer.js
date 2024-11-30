function createFooter() {
    const footer = document.createElement('footer');
  
    footer.innerHTML = `
      <div class="ajuda">
          <h2>Precisa de ajuda?</h2>
          <p>Fale conosco pelo WhatsApp</p>
          <a href="https://api.whatsapp.com/send/?phone=5511999999999&text&type=phone_number&app_absent=0" class="botao-whatsapp">
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
              <a href="sobre.html">Principios</a>
              <a href="politica.html">política de privacidade</a>
          </div>
          
          <div class="redes-sociais">
              <a href="https://www.instagram.com/seuperfil/" target="_blank">
               <img src="img/icones/instagram.png.png" alt="Instagram"></a>
              <a href="https://www.linkedin.com/in/seuperfil/" target="_blank">
               <img src="img/icones/linkedin (1).png" alt="LinkedIn">
          </div>
      </div>
    `;
  
    document.body.appendChild(footer);
  }