<template>
  <div class="global">
    <h3>ESTATÍSTICA SOBRE A ASSOCIAÇÃO</h3>
    <div class="container">
      <div class="cima">
        <Statistic />
        <Statistic />
        <Statistic />
      </div>
      <div class="baixo">
        <Statistic />
        <Statistic />
      </div>  
    </div>
  </div>
</template>

<script>
import Statistic from '../../components/frontoffice/Statistic.vue';

export default {
  components: { Statistic }
}
</script>

<style scoped>


.global {
  background: url("@/assets/person-woman.jpg");
  margin-top: 2.5%;
  height: 600px;

}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 80px 10px 80px;
 
}

.cima, .baixo {
  margin: 15px; /* Adiciona margem para separar as estatísticas */
  display: flex;
  
}

h3 {
  position: relative;
  margin-top: 0%;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding:3%;
}
</style>