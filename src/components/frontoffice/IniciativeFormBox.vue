<template>
  <div class="caixa">
    <div class="rectangle">
      <h3><b>Proponha uma iniciativa</b></h3>
      <p>Tens uma ideia para melhorar a saúde e o bem-estar através do desporto? Queremos ouvi-la! Somos uma empresa sem fins lucrativos dedicada a promover estilos de vida saudáveis. Apresente a sua proposta e junte-se a nós para fazer a diferença. Proponha a sua iniciativa hoje!</p>
        <div class="button">
          <Button @click="redirect" content="PROPÔR" />
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
            this.$router.push('/iniciativeForm')
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
  padding:4vh;
  margin-bottom: 5vh;
}

h3 {
  align-content: center;
  margin-bottom: 3vh; /* Espaçamento inferior entre o título e o texto */
  font-weight: 500;
  font-family: "Poppins", sans-serif;
}

p {
  font-style: italic; /* Texto em itálico */
  text-align: justify;
  font-size: 12.5px;
}


</style>