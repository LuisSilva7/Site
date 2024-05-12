<template>
  <div v-if="!consulted" class="card mb-3" style="max-width: 50rem; max-height:50rem">
    <div class="row g-0">
      <div class="col-md-4 d-flex">
        <img src="@/assets/gym-class-image.png" class="img-fluid rounded-start" alt="gym class">
      </div>
        <div class="col-md-8 d-flex flex-column">
          <div class="card-body">
            <h5 class="card-title">{{ proposedIniciative.theme }}</h5>
            <p class="card-text">DIA: {{ proposedIniciative.date }}</p>
            <p class="card-text">LOCAL: {{ proposedIniciative.local }}</p>
            <BlueButton @click="buttonHandler" content="CONSULTAR" />
          </div>
        </div>
    </div>
  </div>
  <ProposedIniciativeBoxConsulted :proposedIniciative="proposedIniciative" :status="status" @createPlan="handleCreatePlan" @close="handleClose" v-else />
</template>

<script>
import BlueButton from './BlueButton.vue'
import ProposedIniciativeBoxConsulted from './ProposedIniciativeBoxConsulted.vue'

export default {
  props: ['proposedIniciative', 'status'],
  components: { BlueButton, ProposedIniciativeBoxConsulted },
  data() {
      return {
          consulted: false
      }
  },
  methods: {
      buttonHandler() {
          this.consulted = true
      },
      handleClose() {
          this.consulted = false
      },
      handleCreatePlan(iniciative) {
        this.$emit('createIniciativePlan', iniciative)
      }
  }
}
</script>

<style scoped>

.card.mb-3 { 
height: 10.2rem;
display: flex;
flex-direction: row;
margin-left: 2.5rem;
margin-top:10rem; 
border-radius: 10px;
overflow:visible;
background-color: #1B2631;
}

.col-mg-4 {
height:100%;
margin-right: 0%;
width:45%;
}

.col-mg-4 img{
object-fit: cover;
}

.col-md-8 {
width: 55%;
color: white;
font-family: nunito;
font-size:18px;
height:fit-content;
}

.card-body {
padding: 10px;
}

.card-title,
.card-text {
margin-bottom: 10px; /* Adjust the margin bottom for each element */
}

.btn {
color: white;
font-size:13px;
font-style: bold;
border:#161934;
border-radius: 50px;
background-image: linear-gradient(to bottom, #414A9A, #161934);
margin-left: 96%;
margin-bottom: 2%;
}

</style>