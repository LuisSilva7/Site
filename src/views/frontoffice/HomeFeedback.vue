<template>
  <div class="container">
      <h4>FEEDBACK DE ALGUNS PARTICIPANTES</h4>
      <hr />
    <div class="scroll-container">
      <div v-for="(iniciative, index) in iniciatives" :key="index" class="iniciative-container" >
          <Feedback :theme="iniciative.theme"/>
      </div>
    </div>
  </div>
</template>

<script>
import Feedback from '../../components/frontoffice/Feedback.vue'

export default {
  components: { Feedback },
  data() {
    return {
      iniciatives: []
    }
  },
  created() {
    if (localStorage.getItem('iniciatives')) {
          this.iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.status === 'passada')
    }
  }
}
</script>

<style scoped>
.container {
max-width: 100%;
overflow-x: auto; /* Adiciona rolagem horizontal */
}

.scroll-container {
overflow-x: scroll; /* Adiciona rolagem horizontal ao container */
white-space: nowrap; /* Impede a quebra de linha dos elementos */
}

.scroll-container::-webkit-scrollbar {
width: 12px; /* Largura da barra de rolagem */
}

.scroll-container::-webkit-scrollbar-track {
background: #f1f1f1; /* Cor de fundo da barra de rolagem */
}

.scroll-container::-webkit-scrollbar-thumb {
background: #888; /* Cor do polegar da barra de rolagem */
border-radius: 6px; /* Borda arredondada do polegar da barra de rolagem */
}

.iniciative-container {
display: inline-flex;
margin-right: 2%;
}

/* Adiciona um espaço entre os componentes usando :after */
.iniciative-container > :not(:last-child)::after {
content: '';
width: 10px; /* Define a largura do espaço entre os componentes */
display: inline-block;
}

h4 {
position: relative;
margin-top: 4.5%;
text-align: center;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

hr {
position: relative;
max-width: 65%;
margin: 0 auto;
margin-top: 1%;

}
</style>