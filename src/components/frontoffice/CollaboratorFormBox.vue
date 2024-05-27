<template>
  <div class="caixa">
    <div class="rectangle">
      <h3><b>Candidate-se a colaborador</b></h3>
      <p>Junta-te a nós e tenha a oportunidade de fazer a diferença, ajudando pessoas em todo o mundo. Venha fazer parte desta iniciativa inovadora e impactante!</p>
        <div class="button">
          <Button @click="redirect" content="CANDIDATAR" />
        </div>
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

.rectangle {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: justify;
  margin-left: 5vh;
  margin-bottom: 5vh;
  padding:4vh;
  margin-top: 2vh;
}

h3 {
  align-content: center;
  margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
  font-family: "Poppins", sans-serif;
}

p {
  font-style: italic; /* Texto em itálico */
  text-align: justify;
  font-size: 12.5px;
}

</style>