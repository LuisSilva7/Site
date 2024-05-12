<template>
    <div id="iniciative" class="form-container">
      <h3>PROPONHA UMA INICIATIVA</h3>
      <form>
        <div class="form-group">
          <label for="foto">Foto:</label>
          <input type="file" @change="handleFileChange" id="foto" name="foto" accept="image/*" required>
        </div>
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input v-model="proposedIniciative.name" type="text" id="nome" name="nome" required>
        </div>
        <div class="form-group">
          <label for="dataNascimento">Data de Nascimento:</label>
          <input v-model="proposedIniciative.birthDate" type="date" id="dataNascimento" name="dataNascimento" required>
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input v-model="proposedIniciative.telNumber" type="tel" id="telefone" name="telefone" required>
        </div>
        <div class="form-group">
          <label for="nomeTema">Nome do Tema:</label>
          <input v-model="proposedIniciative.theme" type="text" id="nomeTema" name="nomeTema" required>
        </div>
        <div class="form-group">
          <label for="local">Local:</label>
          <input v-model="proposedIniciative.local" type="text" id="local" name="local" required>
        </div>
        <div class="form-group">
          <label for="publicoAlvo">Público-Alvo:</label>
          <input v-model="proposedIniciative.targetAudience" type="text" id="publicoAlvo" name="publicoAlvo" required>
        </div>
        <div class="form-group">
          <label for="minParticipantes">Número Mínimo de Participantes:</label>
          <input v-model="proposedIniciative.minParticipants" type="number" id="minParticipantes" name="minParticipantes" required>
        </div>
        <div class="form-group">
          <label for="maxParticipantes">Número Máximo de Participantes:</label>
          <input v-model="proposedIniciative.maxParticipants" type="number" id="maxParticipantes" name="maxParticipantes" required>
        </div>
        <div class="form-group">
          <label for="dataIniciativa">Data da Iniciativa:</label>
          <input v-model="proposedIniciative.date" type="date" id="dataIniciativa" name="dataIniciativa" required>
        </div>
        <div class="form-group">
          <label for="objetivo">Objetivo:</label>
          <textarea v-model="proposedIniciative.objective" id="objetivo" name="objetivo" rows="4" required></textarea>
        </div>
        <Button @click="proposedIniciativeHandler" content="ENVIAR PROPOSTA"/>
      </form>
    </div>
  </template>
  
  <script>
  import Button from '../frontoffice/Button.vue'
  import { getAuth, onAuthStateChanged } from "firebase/auth"
  
  export default {
    components: { Button },
    data() {
      return {
        //fazer login e registar email e ver foto
        proposedIniciative: {photo: '', name: '', birthDate: '', telNumber: '', theme: '', local: '', targetAudience: '', minParticipants: 0,
                            maxParticipants: 0, objective: '', date: '', status: 'pendente', email: ''},
        file: null,
        imageData: ''
      }
    },
    methods: {
      proposedIniciativeHandler() {
        if (localStorage.getItem('proposedIniciatives')) {
          const auth = getAuth()
          onAuthStateChanged(auth, (user) => {
            if (user) {

              const reader = new FileReader()

              reader.onload = (event) => {

                const base64Image = event.target.result;

                this.proposedIniciative.email = user.email

                let proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
                this.proposedIniciative.photo = base64Image
                proposedIniciatives.push(this.proposedIniciative)
                localStorage.setItem('proposedIniciatives', JSON.stringify(proposedIniciatives))
              }
              if(this.file) {
                reader.readAsDataURL(this.file)
                location.reload()
                alert("Proposta de iniciativa enviada com sucesso!")
              }
              else {
                this.proposedIniciative.email = user.email
              let proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
              proposedIniciatives.push(this.proposedIniciative)
              localStorage.setItem('proposedIniciatives', JSON.stringify(proposedIniciatives))
              location.reload()
                alert("Proposta de iniciativa enviada com sucesso!")
              }
            }
          })
        }
      },
      handleFileChange(event) {
        this.file = event.target.files[0]; // Obtém o arquivo de imagem selecionado pelo usuário
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  h3 {
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="number"],
  textarea,
  input[type="date"] {
    width: calc(100% - 12px); /* Adiciona espaço para a borda */
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical; /* Permite redimensionamento vertical */
  }
  </style>