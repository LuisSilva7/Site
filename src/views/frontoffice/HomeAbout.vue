<template>
  <br>
  <div class="container">
    <CollaboratorFormBox />
    <IniciativeFormBox />
    <AboutComplex class="oal"/>
  </div>
</template>

<script>
import AboutComplex from "../../components/frontoffice/AboutComplex.vue";
import CollaboratorFormBox from "../../components/frontoffice/CollaboratorFormBox.vue";
import IniciativeFormBox from "../../components/frontoffice/IniciativeFormBox.vue";

export default {
  components: { AboutComplex, CollaboratorFormBox, IniciativeFormBox },
};
</script>

<style scoped>
.container {
  
  background: url("@/assets/people-class.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: relative;
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo à esquerda */
  align-items: center; /* Alinha verticalmente */
  height: 70vh; /* Altura total da viewport */
}
.oal {
  padding-right: 170px;
}

/* Estilo para o componente JoinWorker */
/* Adicione estilos conforme necessário */
</style>