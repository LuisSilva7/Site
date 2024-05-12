<template>
    <div class="container">
      <div class="rectangle">
        <h3><b>Proponha uma iniciativa</b></h3>
        <p>Vais conseguir ajudar pessoas por todo o mundo. Vem fazer parte desta nova iniciativa.</p>
        <Button @click="redirect" content="PROPÔR" />
      </div>
    </div>
  </template>
  
  <script>
  import Button from './Button.vue'
  
  export default {
      components: { Button },
      methods: {
          redirect() {
              this.$router.push('/iniciativeForm')
          }
      }
  }
  </script>
  
  <style scoped>
  
  .botao{
    float: left;
  }
  .rectangle {
    width: 70%; /* Largura do retângulo */
    padding: 0px;
    text-align: left; /* Alinhamento do texto ao centro */
    margin: 0% 0% 50% 10%;
  }
  
  h3 {
    margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
  }
  
  p {
    font-style: italic; /* Texto em itálico */
    text-align: left;
  }
  </style>