<template>
  <div class="card mb-3" style="max-width: 50rem; max-height:50rem">
    <div class="row g-0">
      <div class="col-md-4 d-flex">
        <img src="@/assets/gym-class-image.png" class="img-fluid rounded-start" alt="gym class">
      </div>
        <div class="col-md-8 d-flex flex-column">
          <div class="card-body">
            <div class="button-body mt-auto">
            <BlueButton @click="closeHandler" content="-" />
            </div>
            <h5 class="card-title">{{ proposedIniciative.theme }}</h5>
            <p class="card-text">DIA: {{ proposedIniciative.date }}</p>
            <p class="card-text">LOCAL: {{ proposedIniciative.local }}</p>
            <p class="card-text">OBJETIVO: {{ proposedIniciative.objective }}</p>
            <p class="card-text">DADOS PROPONENTE:</p>
            <p class="card-text">NOME: {{ proposedIniciative.name }}</p>
            <p class="card-text">EMAIL: {{ proposedIniciative.email }}</p>
            <p class="card-text">DATA NASCIMENTO: {{ proposedIniciative.birthDate }}</p>
            <p class="card-text">MÍNIMO PARTICIPANTES: {{ proposedIniciative.minParticipants }}</p>
            <p class="card-text">MÁXIMO PARTICIPANTES: {{ proposedIniciative.maxParticipants }}</p>
          </div>
          <div v-if="!status">
            <div>
              <RedButton @click="rejectHandler" content="RECUSAR" />
            </div>
            <div class="button-body mt-auto">
              <BlueButton @click="createIniciativePlan" content="CRIAR PLANO" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

 <script>
import BlueButton from './BlueButton.vue'
import RedButton from './RedButton.vue'
import CreateIniciativePlan from './CreateIniciativePlan.vue'

  export default {
    props: ['proposedIniciative', 'status'],
    components: { BlueButton, RedButton, CreateIniciativePlan },
    data() {
        return {
            createPlan: false
        }
    },
    methods: {
        closeHandler() {
            this.$emit('close', '')
        },
        rejectHandler() {
            if (localStorage.getItem('proposedIniciatives')) {
                let proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
                                            .filter(proposedIniciative => proposedIniciative.theme !== this.proposedIniciative.theme)
                this.proposedIniciative.status = 'rejeitada'
                proposedIniciatives.push(this.proposedIniciative)
                localStorage.setItem('proposedIniciatives', JSON.stringify(proposedIniciatives))

                location.reload()
            }
        },
        createIniciativePlan() {
            this.createPlan = true
            let iniciative = this.proposedIniciative
            this.$emit('createPlan', iniciative)
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