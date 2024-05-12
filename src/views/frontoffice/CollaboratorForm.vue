<template>
  <TheHeader />
  <div id="collaborator" class="container">
    <div class="rectangle">
      <h6>CANDIDATE-SE A COLABORADOR</h6>
      <p>Vais conseguir ajudar pessoas por todo o mundo. Faz parte desta iniciativa!</p>
      <div class="form-container">
        <form>
          <input v-model="proposedCollaborator.name" type="text" placeholder="Nome">
          <input v-model="proposedCollaborator.birthDate" type="date" placeholder="Data de Nascimento">
          <input v-model="proposedCollaborator.telNumber" type="tel" placeholder="Telefone">
          <input v-model="proposedCollaborator.address" type="text" placeholder="Morada">
          <input type="file" @change="handleFileChange" id="foto" name="foto" accept="image/*" required>
        </form>
      </div>
      <Button @click="proposedCollaboratorHandler" content="JUNTA-TE A NÓS"/>
    </div>
  </div>
</template>

<script>
import Button from '../../components/frontoffice/Button.vue'
import TheHeader from '../../components/frontoffice/TheHeader.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: { TheHeader, Button },
  data() {
    return {
      //fazer login e registar email e ver foto
      proposedCollaborator: {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: ''},
      file: null,
      ImageData: ''
    }
  },
  methods: {
    proposedCollaboratorHandler() {
        if (localStorage.getItem('proposedCollaborators')) {
          const auth = getAuth()
          onAuthStateChanged(auth, (user) => {
            if (user) {

              const reader = new FileReader()

              reader.onload = (event) => {

                const base64Image = event.target.result;

                this.proposedCollaborator.email = user.email

                let proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
                this.proposedCollaborator.photo = base64Image
                proposedCollaborators.push(this.proposedCollaborator)
                localStorage.setItem('proposedCollaborators', JSON.stringify(proposedCollaborators))
              }
              if(this.file) {
                reader.readAsDataURL(this.file)
                this.$router.push('/')
                alert("Candidatura a colaborador enviada com sucesso!")
              }
              else {
                this.proposedCollaborator.email = user.email
                let proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
                proposedCollaborators.push(this.proposedCollaborator)
                localStorage.setItem('proposedCollaborators', JSON.stringify(proposedCollaborators))
                this.$router.push('/')
                alert("Candidatura a colaborador enviada com sucesso!")
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
.container {
  display: flex;
  justify-content: center;
}

.rectangle {
  width: 400px; /* Largura do retângulo */
  padding: 20px;
  background-color: rgba(201, 164, 164, 0.1); /* Cor de fundo com transparência */
  border: 2px solid #333; /* Borda sólida de 2px */
  border-radius: 10px; /* Borda arredondada */
  text-align: center; /* Alinhamento do texto ao centro */
}

h6 {
  margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
}

p {
  font-style: italic; /* Texto em itálico */
}

.form-container {
  margin-bottom: 20px; /* Espaçamento entre o formulário e o botão */
}
</style>