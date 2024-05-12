<template>
    <div class="container">
      <div class="button-body mt-auto">
        <BlueButton @click="closeHandler" content="-" />
      </div>
      <form>
        <div class="form-group">
          <label for="duration">Duração Esperada:</label>
          <input type="text" id="duration" v-model="finalIniciative.expectedDuration">
        </div>
        <div class="form-group">
          <label for="professionals">Colaboradores:</label>
          <input type="text" id="professionals" v-model="finalIniciative.collaborators">
        </div>
        <div class="form-group">
          <label for="materials">Materiais Necessários:</label>
          <input type="text" id="materials" v-model="finalIniciative.materials">
        </div>
        <div class="form-group">
          <label for="professionals">Profissionais:</label>
          <input type="text" id="professionals" v-model="finalIniciative.professionals">
        </div>
        <div class="form-group">
          <label for="companies">Empresas Associadas:</label>
          <input type="text" id="companies" v-model="finalIniciative.companies">
        </div>
        <div class="form-group">
          <label for="eventFlow">Fluxo de Eventos:</label>
          <textarea id="eventFlow" v-model="finalIniciative.eventFlow"></textarea>
        </div>
        <BlueButton @click="submitForm" content="Guardar" />
      </form>
    </div>
  </template>
  
  <script>
  import BlueButton from './BlueButton.vue'
  
  export default {
    props: ['iniciative'],
    components: { BlueButton },
    data() {
      return {
        finalIniciative: {
          photo: '', name: '', birthDate: '', telNumber: '', theme: '', local: '', targetAudience: '',
          minParticipants: 0, maxParticipants: 0, objective: '', date: '', status: 'aceite', email: '', 
          expectedDuration: 0, professionals: [], collaborators: [], materials: [], companies: [], 
          eventFlow: ''
        }
      }
    },
    methods: {
      closeHandler() {
        this.$emit('closeHandler', '')
      },
      submitForm() {
        this.finalIniciative.photo = this.iniciative.photo
        this.finalIniciative.name = this.iniciative.name
        this.finalIniciative.birthDate = this.iniciative.birthDate
        this.finalIniciative.telNumber = this.iniciative.telNumber
        this.finalIniciative.theme = this.iniciative.theme
        this.finalIniciative.local = this.iniciative.local
        this.finalIniciative.targetAudience = this.iniciative.targetAudience
        this.finalIniciative.minParticipants = this.iniciative.minParticipants
        this.finalIniciative.maxParticipants = this.iniciative.maxParticipants
        this.finalIniciative.objective = this.iniciative.objective
        this.finalIniciative.date = this.iniciative.date
        this.finalIniciative.status = this.iniciative.status
        this.finalIniciative.email = this.iniciative.email
        
        if(localStorage.getItem('iniciatives')) {
          let iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
          iniciatives.push(this.finalIniciative)
          localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>