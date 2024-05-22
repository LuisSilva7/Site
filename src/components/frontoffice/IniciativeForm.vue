<template>
  <div class="row">
    <div class="column">
      <div class="header2">
        <div class="titulo">   
          <h4>Proponha uma Iniciativa!</h4>
        </div>          
      </div>
      <form>
      <div class="container-body">
        <div class="form-group">
          <input v-model="proposedIniciative.name" type="text" id="nome" name="nome" required>
          <label for="nome">Nome:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.birthDate" class="datas" type="date" id="dataNascimento" name="dataNascimento" required>
          <label for="dataNascimento">Data de Nascimento:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.telNumber" type="tel" id="telefone" name="telefone" required>
          <label for="telefone">Telefone:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.theme" type="text" id="nomeTema" name="nomeTema" required>
          <label for="nomeTema">Nome do Tema:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.local" type="text" id="local" name="local" required>
          <label for="local">Local:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.targetAudience" type="text" id="publicoAlvo" name="publicoAlvo" required>
          <label for="publicoAlvo">Público-Alvo:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.minParticipants" type="number" id="minParticipantes" min="0" name="minParticipantes" required>
          <label for="minParticipantes" class="participantes">Número Mínimo de Participantes:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.maxParticipants" type="number" id="maxParticipantes" min="0" name="maxParticipantes" required>
          <label for="maxParticipantes" class="participantes">Número Máximo de Participantes:</label>
        </div>
        <div class="form-group">
          <input v-model="proposedIniciative.date" class="datas" type="date" id="dataIniciativa" name="dataIniciativa" required>
          <label for="dataIniciativa">Data da Iniciativa:</label>
        </div>
        <div class="form-group">
          <input type="file" class="picture" @change="handleFileChange" id="foto" name="foto" accept="image/*" required>
          <label for="foto">Foto:</label>
        </div>
          <div class="form-group">
            <textarea v-model="proposedIniciative.objective" id="objetivo" name="objetivo" placeholder="Introduza o seu objetivo..." rows="4" required></textarea>
          </div>
        <div class="button">
          <Button @click="proposedIniciativeHandler" content="ENVIAR PROPOSTA"/>
        </div>
      </div>
    </form>
    </div>
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

.form-group textarea {
    resize: none;
    width:347px;
    font-size: 14px;
}

body{
  margin:0;
  padding: 0;
  font-family: montserrat;
  height:100vh;
  overflow: hidden;
}

h4 {
  text-align: center;
}

.row {
  background: url("@/assets/background-header-image.jpeg");
  padding:0.5rem;
  margin-left: 25%;
  margin-top: 29%;
  transform: translate(-50%, -50%);
  width:400px;
  min-width: 400px;
  height:auto;
  max-height: 35rem;
  border-radius: 20px;
  border: 2px solid #adadad;
  overflow-y: auto; /* Adiciona barra de rolagem vertical */
  scrollbar-width: thin; /* Largura da barra de rolagem para navegadores que suportam o modelo de barra de rolagem padrão */
  scrollbar-color: #888 #f1f1f1; /* Cor da barra de rolagem */
}

.form-container::-webkit-scrollbar {
  width: 12px; /* Largura da barra de rolagem */
}

.form-container::-webkit-scrollbar-thumb {
  background-color: #888; /* Cor do botão da barra de rolagem */
  border-radius: 6px; /* Raio da borda do botão da barra de rolagem */
}

.form-container::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Cor do botão da barra de rolagem ao passar o mouse */
}

.form-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* Cor do trilho da barra de rolagem */
  border-radius: 6px; /* Raio da borda do trilho da barra de rolagem */
}

.titulo {
  text-align: center;
  padding:0.5rem;
}

.center form{
  max-width: 420px;
  margin: 40px 20px;
  text-align: left;
  padding: 10px;
  border-radius: 30px;
  box-sizing: border-box;
}

form .form-group{
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

.datas:focus ~ label,
.datas:not(:placeholder-shown) ~ label {
  top: -5px;
  color: #adadad;
  font-size: 12px;
}

.picture:focus ~ label,
.picture:not(:placeholder-shown) ~ label {
  top: -13px;
  color: #adadad;
  font-size: 13px;
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

.button{
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}


</style>