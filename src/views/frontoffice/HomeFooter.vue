<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>Redes Sociais</h5>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="https://facebook.com">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://linkedin.com">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <!-- Adiciona mais redes sociais conforme necessário -->
            </ul>
          </div>
          <div class="col-md-6">
            <h5>Contacto</h5>
            <ul class="list-unstyled">
              <li>
                <i class="fas fa-map-marker-alt"></i> Endereço: Rua Exemplo, Cidade, País
              </li>
              <li>
                <i class="fas fa-phone"></i> Telefone: +123456789
              </li>
              <li>
                <i class="fas fa-envelope"></i> Email: info@exemplo.com
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <p class="text-muted small">© 2024 Nome do Teu Site. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  }
  </script>
  
  <style scoped>
  .footer {

    padding: 30px 0;
  }
  
  .container {
    text-align: center;
  }
  
  .list-inline-item {
    font-size: 24px;
    margin-right: 15px;
  }
  
  .list-unstyled li {
    margin-bottom: 10px;
  }
  
  .text-muted {
    font-size: 14px;
  }
  </style>