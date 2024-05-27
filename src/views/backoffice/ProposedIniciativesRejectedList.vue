<template>
  <div>
    <TheNavBar />
    <br>
    <br>
    <br>
    <div class="titulo">
    <h2>Iniciativas Rejeitadas</h2>
    </div>
    <div class="page-container">
      <div class="iniciativas-container">
        <div v-if="proposedIniciatives" class="iniciativas-row">
          <div v-for="proposedIniciative in proposedIniciatives" :key="proposedIniciative.theme">
            <IniciativeBox :proposedIniciative="proposedIniciative" :status="status"/>
          </div>
        </div>
        <h4 v-else>Não existem iniciativas rejeitadas!</h4>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/backoffice/TheNavBar.vue'
import IniciativeBox from '@/components/backoffice/IniciativeBox.vue'

export default {
  components: { TheNavBar, IniciativeBox },
  data() {
    return {
      proposedIniciatives: [],
      status: true
    }
  },
  created() {
    if (localStorage.getItem('proposedIniciatives')) {
      this.proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
                                  .filter(proposedIniciative => proposedIniciative.status !== 'pendente')
    }
  }
}
</script>

<style scoped>
.page-container {
   display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  margin-top: 13.5%;
  margin-left: 0.5%;
}

.iniciativas-container {
  background: url("@/assets/background-header-image.jpeg");
  width: 80%; /* Largura do container */
  max-height: 70vh; /* Altura máxima do container */
  overflow-y: auto; /* Adiciona barra de rolagem vertical */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
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
.titulo{
  margin-top: 3%;
  margin-bottom: -13%;
  margin-left: 11%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


</style>