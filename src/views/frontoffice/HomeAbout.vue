<template>
  <div class="container">
    <CollaboratorFormBox />
    <IniciativeFormBox />
    <AboutComplex />
  </div>
</template>

<script>
import AboutComplex from "../../components/frontoffice/AboutComplex.vue";
import CollaboratorFormBox from "../../components/frontoffice/CollaboratorFormBox.vue";
import IniciativeFormBox from "../../components/frontoffice/IniciativeFormBox.vue";

export default {
    components: { AboutComplex, CollaboratorFormBox, IniciativeFormBox }
}
</script>

<style scoped>

.container {
  background: url("@/assets/people-class.jpg");
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo à esquerda */
  align-items: center; /* Alinha verticalmente */
  height: 70vh; /* Altura total da viewport */
}


</style>