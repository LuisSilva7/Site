j<template>
    <div class="card mb-3" style="max-width: 50rem; max-height:50rem">
      <div class="row g-0">
        <div class="col-md-4 d-flex">
          <img src="@/assets/gym-class-image.png" class="img-fluid rounded-start" alt="gym class">
        </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <h5 class="card-title">{{ proposedCollaborator.name }}</h5>
              <p class="card-text">DATA NASCIMENTO: {{ proposedCollaborator.birthDate }}</p>
              <p class="card-text">EMAIL: {{ proposedCollaborator.email }}</p>
              <p class="card-text">TELEMÓVEL: {{ proposedCollaborator.telNumber }}</p>
              <p class="card-text">MORADA: {{ proposedCollaborator.address }}</p>
              <RedButton @click="rejectHandler" content="REJEITAR" />
              <BlueButton @click="acceptHandler" content="ACEITAR" />
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import BlueButton from './BlueButton.vue'
import RedButton from './RedButton.vue';
  
  export default {
    props: ['proposedCollaborator'],
    components: { BlueButton, RedButton },
    methods: {
        rejectHandler() {
            const proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
            const updatedCollaborators = proposedCollaborators.filter(collaborator => collaborator.name !== this.proposedCollaborator.name)
            localStorage.setItem('proposedCollaborators', JSON.stringify(updatedCollaborators))
            location.reload()
        },
        acceptHandler() {
            if (localStorage.getItem('proposedCollaborators')) {
                let proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
                let index = proposedCollaborators.indexOf(this.proposedCollaborator)
                proposedCollaborators.splice(index, 1)
                localStorage.setItem('proposedCollaborators', JSON.stringify(proposedCollaborators))

                if (localStorage.getItem('collaborators')) {
                    let collaborators = JSON.parse(localStorage.getItem('collaborators'))
                    collaborators.push(this.proposedCollaborator)
                    localStorage.setItem('collaborators', JSON.stringify(collaborators))
                }
                location.reload()
            }
        },
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