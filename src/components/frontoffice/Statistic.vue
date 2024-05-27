<template>
  <div class="container">
    <div v-if="content === 'Sucesso das Iniciativas'" class="rectangle">
      <h6>{{ number }} %</h6>
      <p>{{ content }}</p>
    </div>
    <div v-else-if="content === 'Duração Média'" class="rectangle">
      <h6>{{ number }} min</h6>
      <p>{{ content }}</p>
    </div>
    <div v-else class="rectangle">
      <h6>{{ number }}</h6>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['number', 'content']
}
</script>

<style scoped>


.rectangle {
  height: 140px;
  width: 300px; /* Largura do retângulo */
  padding: 10px;
  background-color: rgba(201, 164, 164, 0.1); /* Cor de fundo com transparência */
  border: 2px solid #333; /* Borda sólida de 2px */
  border-radius: 10px; /* Borda arredondada */
  text-align: center; /* Alinhamento do texto ao centro */
  align-content: center;
}

h6 {
  margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
  color: #ffb700;
  font-size: 30px;
}

p {
  font-style: italic; /* Texto em itálico */

}
</style>