<template>
  <div>
    <div class="container">
      <h4>INICIATIVAS REALIZADAS</h4>
      <hr />
      <div class="scroll-container">
        <div class="iniciative-container">
          <PastIniciative/>
          <PastIniciative/>
          <PastIniciative/>
          <PastIniciative/>
          <PastIniciative/>
          <PastIniciative/>
          <PastIniciative/>
        </div>
      </div>
    </div>
    <h4>INICIATIVAS A DECORRER E FUTURAS</h4>
    <hr />
    <div class="curr-fut-container">
      <div class="curr-fut-column">
        <CurrFutIniciative/>
        <CurrFutIniciative/>
      </div>
      <div class="curr-fut-column">
        <CurrFutIniciative/>
        <CurrFutIniciative/>
      </div>
    </div>
    <hr class="small-hr" id="scrollHere" />
    <div class="button-container">
      <Button @click="redirect" content="VER TODAS AS INICIATIVAS"/>
    </div>
  </div>
</template>

<script>
import PastIniciative from '../../components/frontoffice/PastIniciative.vue';
import CurrFutIniciative from '../../components/frontoffice/CurrFutIniciative.vue';
import Button from '../../components/frontoffice/Button.vue';

export default {
  components: { PastIniciative, CurrFutIniciative, Button },
  data() {
    return {
      iniciatives: [] // Adicione suas iniciativas aqui
    }
  },
  methods: {
    redirect() {
      this.$router.push("/iniciatives")
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 2%;
  max-width: 100%;
  overflow-x: auto; /* Adiciona rolagem horizontal */
}

.scroll-container {
  margin-top: 2%;
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
}

/* Adiciona um espaço entre os componentes usando :after */
.iniciative-container > :not(:last-child)::after {
  content: '';
  width: 10px; /* Define a largura do espaço entre os componentes */
  display: inline-block;
}

h4 {
  position: relative;
  margin-top: 1.5%;
  text-align: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

hr {
  position: relative;
  max-width: 70%;
  margin: 0 auto;
  margin-top: 1%;
  border-top: 2px solid;
}

/* Estilo para os containers das iniciativas a decorrer e futuras */
.curr-fut-container {
  display: flex;
  justify-content: center; /* Alinha os containers no centro horizontalmente */
  margin-top: 20px; /* Espaço entre as seções */
}

/* Estilo para as colunas */
.curr-fut-column {
  display: flex;
  flex-direction: column; /* Coluna para empilhar os itens verticalmente */
}

/* Estilo para os componentes CurrFutIniciative */
.curr-fut-column > :not(:last-child) {
  margin-bottom: 20px; /* Espaço entre os componentes */
}

.small-hr {
  width: 30%; /* Largura reduzida */
}

.button-container {
  display: flex;
  justify-content: center; /* Alinha o botão no centro horizontalmente */
  margin-top: 20px; /* Espaço entre o botão e as seções anteriores */
}
</style>