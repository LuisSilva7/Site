<template>
  <div>
    <div class="container">
      <h4>INICIATIVAS REALIZADAS</h4>
      <hr />
      <div class="scroll-container">
        <div v-for="(pastIniciative, index) in pastIniciatives" :key="index" class="iniciative-container">
          <PastIniciative :theme="pastIniciative.theme"/>
        </div>
      </div>
    </div>
    <h4>INICIATIVAS A DECORRER E FUTURAS</h4>
    <hr />
    <div class="curr-fut-container">
      <div class="curr-fut-column">
        <CurrFutIniciative :theme="iniciative1.theme"/>
        <CurrFutIniciative :theme="iniciative3.theme"/>
      </div>
      <div class="curr-fut-column">
        <CurrFutIniciative :theme="iniciative2.theme"/>
        <CurrFutIniciative :theme="iniciative4.theme"/>
      </div>
    </div>
    <div class="button-container">
      <Button @click="redirect" content="VER TODAS AS INICIATIVAS" id="scrollHere"/>
    </div>
  </div>
</template>

<script>
import PastIniciative from '../../components/frontoffice/PastIniciative.vue';
import CurrFutIniciative from '../../components/frontoffice/CurrFutIniciative.vue';
import Button from '../../components/frontoffice/Button.vue';

export default {
  components: { PastIniciative, CurrFutIniciative, Button },
  data() {
    return {
      pastIniciatives: [],
      iniciative1: {},
      iniciative2: {},
      iniciative3: {},
      iniciative4: {}
    }
  },
  methods: {
    redirect() {
      this.$router.push("/iniciatives")
    }
  },
  created() {
    this.pastIniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.status === 'passada')
    var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.status === 'aceite')
    iniciatives.sort((a, b) => new Date(a.date) - new Date(b.date))
    this.iniciative1 = iniciatives[0]
    this.iniciative2 = iniciatives[1]
    this.iniciative3 = iniciatives[2]
    this.iniciative4 = iniciatives[3]
  }
}
</script>

<style scoped>
.container {
  
  margin-top: 3%;
  max-width: 100%;
  overflow-x: auto;
}

.scroll-container {
  margin-top: 2%;
  display: flex;
  justify-content: center; /* Centraliza os itens */
  overflow-x: auto;
  white-space: nowrap; 
  
}

.scroll-container::-webkit-scrollbar {
  width: 12px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

.iniciative-container {
  display: inline-flex;
}

h4 {
  position: relative;
  margin-top: 1.5%;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

hr {
  position: relative;
  max-width: 65%;
  margin: 0 auto;
  margin-top: 1%;
}

.curr-fut-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 50px;
}

.curr-fut-column {
  display: flex;
  flex-direction: column;
}

.curr-fut-column > :not(:last-child) {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
</style>