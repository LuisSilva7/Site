<template>
  <TheHeader class="la" />
  <h2>TODAS AS INICIATIVAS</h2>
  <div class="botoes">
    <ButtonIniciatives content="TODAS" @returnStatus="showIniciatives"/>
    <ButtonIniciatives content="PASSADAS" @returnStatus="showIniciatives"/>
    <ButtonIniciatives content="FUTURAS" @returnStatus="showIniciatives"/>
  </div>
  <div class="iniciatives">
    <div v-for="iniciative in iniciatives" :key="iniciative.theme">
      <CurrFutIniciative :theme="iniciative.theme"/>
    </div>
  </div>
</template>

<script>
import TheHeader from '../../components/frontoffice/TheHeader.vue'
import ButtonIniciatives from '../../components/frontoffice/ButtonIniciatives.vue'
import CurrFutIniciative from '../../components/frontoffice/CurrFutIniciative.vue'

export default {
  components: { TheHeader, ButtonIniciatives, CurrFutIniciative },
  data() {
    return {
      iniciatives: []
    }
  },
  methods: {
    showIniciatives(content) {
      if(content === 'TODAS') {
        this.iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
      }
      else if(content === 'PASSADAS') {
        this.iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
        this.iniciatives = this.iniciatives.filter(iniciative => iniciative.status === 'passada')
      }
      else {
        this.iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
        this.iniciatives = this.iniciatives.filter(iniciative => iniciative.status === 'aceite')
      }
    }
  },
  created() {
    this.iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
  }
}
</script>

<style scoped>
.la {
  background: url("@/assets/background-header-image.jpeg");
}

h2 {
  margin-top: 110px;
  text-align: center;
}

.la2 {
  margin-top: 850px;
}

.botoes {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 6px;
}

.iniciatives {
  max-width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 4 quadrados por linha */
  gap: 115px; /* Espaçamento entre os quadrados */
}

</style>