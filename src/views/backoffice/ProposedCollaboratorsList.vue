<template>
  <div>
    <TheNavBar />
    <br>
    <br>
    <br>
    <div class="titulo">
    <h2>Pedido De Colaboradores</h2>
    </div>
    <div class="page-container">
      <div class="collaborators-container">
        <div v-if="proposedCollaborators" class="collaborators-row">
          <div v-for="proposedCollaborator in proposedCollaborators" :key="proposedCollaborator.email">
            <CollaboratorBox :proposedCollaborator="proposedCollaborator"/>
          </div>
        </div>
        <h4 v-else>Não existem pedidos de colaboradores!</h4>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/backoffice/TheNavBar.vue'
import CollaboratorBox from '@/components/backoffice/CollaboratorBox.vue'

export default {
  components: { TheNavBar, CollaboratorBox },
  data() {
    return {
      proposedCollaborators: [],
      status: true
    }
  },
  created() {
    if (localStorage.getItem('proposedCollaborators')) {
      this.proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
    }
  }
}
</script>

<style scoped>

.titulo{
  margin-top: 3%;
  margin-left: 11%;
  margin-bottom: -2.5%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Altura total da tela */
}


.collaborators-container {
  background: url("@/assets/background-header-image.jpeg");
  width: 80%;
  max-height: 70vh; 
  overflow-y: auto;
  scrollbar-width: thin; 
  scrollbar-color: #888 #f1f1f1; 
  margin-left: 1%;
}

.collaborators-container::-webkit-scrollbar {
  width: 12px; /* Largura da barra de rolagem */
}

.collaborators-container::-webkit-scrollbar-thumb {
  background-color: #888; /* Cor do botão da barra de rolagem */
  border-radius: 6px; /* Raio da borda do botão da barra de rolagem */
}

.collaborators-container::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Cor do botão da barra de rolagem ao passar o mouse */
}

.collaborators-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* Cor do trilho da barra de rolagem */
  border-radius: 6px; /* Raio da borda do trilho da barra de rolagem */
}

.collaborators-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
}

.collaborators-row > div {
  width: calc(50% - 5px); /* Define a largura de cada iniciativa (50% da largura do container, menos margem) */
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .collaborators-row > div {
    width: calc(100% - 5px); /* Em telas menores, cada iniciativa ocupa 100% da largura do container */
  }
}
</style>