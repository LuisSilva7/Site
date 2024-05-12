<template>
    <div class="container">
        <h3>FEEDBACK DE ALGUNS PARTICIPANTES</h3>
        <hr />
      <div class="scroll-container">
        <div class="iniciative-container">
            <Feedback/>
            <Feedback/>
            <Feedback/>
            <Feedback/>
            <Feedback/>
            <Feedback/>
            <Feedback/>
        </div>
      </div>
    </div>
</template>

<script>
import Feedback from '../../components/frontoffice/Feedback.vue';

export default {
    components: { Feedback },
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
}

/* Adiciona um espaço entre os componentes usando :after */
.iniciative-container > :not(:last-child)::after {
  content: '';
  width: 10px; /* Define a largura do espaço entre os componentes */
  display: inline-block;
}

h3 {
  position: relative;
  margin-top: 1.5%;
  padding-left: 75px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

hr {
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 1%;
  border-top: 2px solid;
}
</style>