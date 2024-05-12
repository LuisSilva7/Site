<template>
  <div class="container">
    <div class="rectangle">
      <h6>89%</h6>
      <p>Percentagem de Sucesso</p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>


.rectangle {
  height: 150px;
  width: 250px; /* Largura do retângulo */
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