<template>
  <div class="caixa">
    <div class="rectangle">
      <h3><b>Candidate-se a colaborador</b></h3>
      <p>Junta-te a nós e tenha a oportunidade de fazer a diferença, ajudando pessoas em todo o mundo. Venha fazer parte desta iniciativa inovadora e impactante!</p>
      <Button @click="redirect" content="CANDIDATAR" />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },
  methods: {
      redirect() {
          this.$router.push('/collaboratorForm')
      }
  }
}
</script>

<style scoped>

.botao{
  
  float: left;
}

.botao::hover{
  background-color: #ffffff; /* Branco */
  color: #ff0000; /* Muda a cor do texto para vermelho */
  transform: scale(1.1);
}
.rectangle {
  
  width: 70%; /* Largura do retângulo */
  padding: 0px;

  text-align: left; /* Alinhamento do texto ao centro */
  margin: 0% 0% 50% 10%;
}

h3 {
  margin-top: 38%;
  align-content: center;
  margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
}

p {
  font-style: italic; /* Texto em itálico */
  text-align: left;
}
</style>