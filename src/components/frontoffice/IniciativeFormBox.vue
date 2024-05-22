<template>
  <div class="caixa">
    <div class="rectangle">
      <h3><b>Proponha uma iniciativa</b></h3>
      <p>Tens uma ideia para melhorar a saúde e o bem-estar através do desporto? Queremos ouvi-la! Somos uma empresa sem fins lucrativos dedicada a promover estilos de vida saudáveis. Apresenta a tua proposta e junta-te a nós para fazer a diferença. Proponha a tua iniciativa hoje!</p>
      <Button @click="redirect" content="PROPÔR" />
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

.botao{
  float: left;
}

  .caixa{
   width: 150%;      
   margin-top: 20%;
      
  }

.rectangle {
  margin-top: 20%;
  width: 50%; /* Largura do retângulo */
  padding: 0px;
  text-align: left; /* Alinhamento do texto ao centro */
  margin: 0% 0% 50% 10%;
}

h3 {
  
  margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
}

p {
  font-style: italic; /* Texto em itálico */
  text-align: left;
}
</style>