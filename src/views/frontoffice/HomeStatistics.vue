<template>
  <h4>ESTATÍSTICA SOBRE A ASSOCIAÇÃO</h4>
  <hr>
  <div class="global">
    <div class="container">
      <div class="row">
        <div class="col-md-6 estatisticas">
          <div class="cima row">
            <div class="b1"> <Statistic  :number="pastIniciatives" content="Iniciativas Realizadas"/> </div>
            <div class="b2"><Statistic  :number="medSuccess" content="Sucesso das Iniciativas"/></div>
          </div>
          <div class="baixo row">
            <div class="b3"><Statistic class="col-6" :number="medParticipants" content="Média de Participantes"/></div>
            <div class="b4"><Statistic class="col-6" :number="medDuration" content="Duração Média"/></div>
          </div>
        </div>
        <div class="col-md-6 video">
          <a href="https://www.youtube.com/watch?v=UwyE_XIQ7DA" target="_blank">
            <img src="https://img.youtube.com/vi/UwyE_XIQ7DA/maxresdefault.jpg" class="img-fluid" alt="Thumbnail do Vídeo">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistic from '../../components/frontoffice/Statistic.vue';

export default {
  components: { Statistic },
  data() {
    return {
      iniciatives: [],
      pastIniciatives: 0,
      medSuccess: 0.0,
      medParticipants: 0.0,
      medDuration: 0.0
    }
  },
  created() {
    this.iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.status === 'passada')
    this.pastIniciatives = this.iniciatives.length

    var sumSuccess = 0.0
    var sumParticipants = 0.0
    var sumDuration = 0.0
    for(const iniciative of this.iniciatives) {
      sumSuccess = sumSuccess + iniciative.successRate
      sumParticipants = sumParticipants + iniciative.participants
      sumDuration = sumDuration + iniciative.duration
    }
    this.medSuccess = Math.round(sumSuccess / this.iniciatives.length)
    this.medParticipants = Math.round(sumParticipants / this.iniciatives.length)
    this.medDuration = Math.round(sumDuration / this.iniciatives.length)
  }
}
</script>

<style scoped>


.global {
  background: url("@/assets/person-woman.jpg");
  margin-top: 2.5%;
  height: 600px;
  width: 100%;

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.col-md-6.video{
  margin-top: 8%;
}

.estatisticas .cima, .estatisticas .baixo {
  display: flex; 
  margin: 60px;
}
.col-md-6.estatisticas{
  width: 660px;
}
h4 {
  position: relative;
  margin-top: 4.5%;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

hr {
  position: relative;
  max-width: 65%;
  margin: 0 auto;
  margin-top: 1%;
}
.b1 , .b3{
  margin-left: -30%;
  margin-top: 13%;
}
.b2 , .b4{
  margin-left: 30%;
  margin-top: -22%;
}

</style>