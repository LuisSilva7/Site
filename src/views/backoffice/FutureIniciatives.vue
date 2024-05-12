<template>
    <div>
      <TheNavBar />
      <br>
      <br>
      <br>
      <h2>INICIATIVAS FUTURAS</h2>
      <div class="page-container">
        <div class="iniciativas-container">
          <div v-if="iniciatives" class="iniciativas-row">
            <div v-for="(iniciative, index) in iniciatives" :key="index">
              <FutureIniciativeBox :iniciative="iniciative"/>
            </div>
          </div>
          <h4 v-else>Não existem iniciativas futuras!</h4>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TheNavBar from '@/components/backoffice/TheNavBar.vue'
  import FutureIniciativeBox from '@/components/backoffice/FutureIniciativeBox.vue'
  
  export default {
    components: { TheNavBar, FutureIniciativeBox },
    data() {
      return {
        iniciatives: []
      }
    },
    created() {
      if (localStorage.getItem('iniciatives')) {
        this.iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => {
            return iniciative.status === 'aceite'
        })
        console.log(this.iniciatives)
      }
    }
  }
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh; /* Altura total da tela */
  }
  
  .iniciativas-container {
    background: url("@/assets/background-header-image.jpeg");
    width: 80%; /* Largura do container */
    max-height: 70vh; /* Altura máxima do container */
    overflow-y: auto; /* Adiciona barra de rolagem vertical */
    scrollbar-width: thin; /* Largura da barra de rolagem para navegadores que suportam o modelo de barra de rolagem padrão */
    scrollbar-color: #888 #f1f1f1; /* Cor da barra de rolagem */
  }
  
  .iniciativas-container::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
  }
  
  .iniciativas-container::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do botão da barra de rolagem */
    border-radius: 6px; /* Raio da borda do botão da barra de rolagem */
  }
  
  .iniciativas-container::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do botão da barra de rolagem ao passar o mouse */
  }
  
  .iniciativas-container::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do trilho da barra de rolagem */
    border-radius: 6px; /* Raio da borda do trilho da barra de rolagem */
  }
  
  .iniciativas-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .iniciativas-row > div {
    width: calc(50% - 5px); /* Define a largura de cada iniciativa (50% da largura do container, menos margem) */
    margin-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    .iniciativas-row > div {
      width: calc(100% - 5px); /* Em telas menores, cada iniciativa ocupa 100% da largura do container */
    }
  }
  </style>