<template>
  <TheHeader class="header"/>
  <div class="container">
    <div class="header2">
      <div class="titulo">
        <h5>CANDIDATE-SE A COLABORADOR!</h5>
      </div>          
    </div>
    <form @submit.prevent="handleSubmit">
        <div class="txt_field">
            <input type ="text" required v-model="proposedCollaborator.name">
            <label>Nome:</label>
        </div>
        <div class="txt_field">
            <input type ="tel" required v-model="proposedCollaborator.telNumber">
            <label>Número de Telemóvel:</label>
        </div>
        <div class="txt_field">
            <input type ="text" required v-model="proposedCollaborator.address">
            <label>Morada:</label>
        </div>
        <div class="txt_field">
            <input type ="date" required v-model="proposedCollaborator.birthDate">
            <label>Data de Nascimento:</label>
        </div>
        <div class="input_foto">
          <input type="file" @change="handleFileChange" id="foto" name="foto" accept="image/*" required>
        </div>
        <div class="button">
          <Button @click="proposedCollaboratorHandler" content="JUNTA-TE A NÓS"/>
        </div>
    </form>
  </div>
</template>

<script>
import Button from '../../components/frontoffice/Button.vue'
import TheHeader from '../../components/frontoffice/TheHeader.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref as storageRef, uploadBytes  } from 'firebase/storage'

export default {
  components: { TheHeader, Button },
  data() {
    return {
      proposedCollaborator: {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: '', check: false},
      file: null
    }
  },
  methods: {
    proposedCollaboratorHandler() {
        if (localStorage.getItem('proposedCollaborators')) {
          const auth = getAuth()
          onAuthStateChanged(auth, (user) => {
            if (user) {
              if(this.file) {
                const storage = getStorage()
                const imageRef = storageRef(storage, 'images/' + this.file.name)
                uploadBytes(imageRef, this.file).then((snapshot) => {
                  console.log('Imagem enviada com sucesso para o Firebase!')
                }).catch((error) => {
                  console.error('Erro ao enviar imagem:', error)
                })
              }

                let proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
                this.proposedCollaborator.email = user.email
                if(this.file) {
                  this.proposedCollaborator.photo = this.file.name
                }
                proposedCollaborators.push(this.proposedCollaborator)
                localStorage.setItem('proposedCollaborators', JSON.stringify(proposedCollaborators))
                this.$router.push('/')
                alert("Candidatura a colaborador enviada com sucesso!")
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
* {
  background: url("@/assets/background-header-image.jpeg");
}
  
  body{
    margin:0;
    padding: 0;
    font-family: montserrat;
    height:100vh;
    overflow: hidden;
  }

  h5 {
    text-align: center;
  }

  .header2{
    border-radius: 30px;
  }

  .titulo{
    padding-top: 1.5rem;
    border-radius: 30px;
  }

  .button{
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .container {
    position:absolute;
    margin-top: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:400px;
    border-radius: 30px;
    border: 2px solid #adadad;
  }

  .center form{
    max-width: 420px;
    margin: 40px 20px;
    text-align: left;
    padding: 10px;
    border-radius: 30px;
    box-sizing: border-box;
  }

  form .txt_field{
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
  }

  label {
      color: #adadad;
      position:absolute;
      top:50%;
      left:5px;
      transform: translateY(-50%);
      font-size: 16px;
      pointer-events: none;
      transition: .5s;
  }

  input {
      color: #c6c6c6;
      padding: 0 5px;
      width: 100%;
      height: 40px;
      font-size: 16px;
      border: none;
      background:none;
      outline:none;
  }

  span::before{
  content: '';
  position: absolute;
  top: 40px;
  left:0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: .5s;
  }

  input:focus ~label,
  input:valid~label{
  top: -5px;
  color: #ffffff;
  }

  input:focus ~ span::before,
  input:valid ~ span::before{
  width: 100%;
  }

  input[type="submit"]{
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor:pointer;
  outline:none;
  margin: -5px 0 -10px 5px;
  }

  input[type="submit"]:hover{
  border-color: #2691d9;
  transition: .5s;
  }

  .header{
    background: url("@/assets/background-header-image.jpeg");
  }

</style>