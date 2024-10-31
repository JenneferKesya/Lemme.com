// Função para gerar o código de inscrição automaticamente
function generateInscriptionCode() {
    const code = 'EV' + Math.floor(Math.random() * 100000);
    document.getElementById('inscriptionCode').value = code;
  }
  
  // Adiciona um evento ao formulário para evitar envio antes de gerar o código
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    if (!document.getElementById('inscriptionCode').value) {
      alert('Por favor, gere o código de inscrição antes de enviar.');
      event.preventDefault();
    }
  });
  