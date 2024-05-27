<template>
  <div class="container">
    <div class="button-body mt-auto">
      <BlueButton @click="closeHandler" content="-" />
    </div>
    <form>
    <!--| Profissionais Associados |-->
        <div class="form-group prof">
          <div class="row-title">
            <div class="title">
              <h5>Profissionais Associados</h5>
            </div>
          </div>
          <div class="row row-cols-2">
            <div class="input-group">
              <div class="column name">
                <input type="text" id="professionalName" v-model="professionalTmp.name" required>
                <label for="professionalName">Nome:</label>
              </div>
              <div class="column name">
                <input type="text" id="professionalRole" v-model="professionalTmp.role" required>
                <label for="professionalRole">Cargo:</label>
              </div>
            </div>
          </div>
          <!--Divisoria para dar add aos profissionais associados-->
          <div class="conf-button">
            <BlueButton @click.prevent="saveProfessional" content="Confirmar profissionais" />
          </div>
          <div v-for="(professional, index) in finalIniciative.professionals" :key="index" class="add-prof">
            <h6>Nome: {{ professional.name }} - Cargo: {{ professional.role }}</h6>
          </div>
      </div>
      <!--| Empresas Associadas |-->
      <div class="form-group emp">
        <div class="row-title">
          <div class="title">
            <h5>Empresas Associadas</h5>
          </div>
        </div>
        <div class="row row-cols-2">
          <div class="input-group">
            <div class="column name">
              <input type="text" id="companyName" v-model="companyTmp.name" required>
              <label for="companyName">Nome:</label>
            </div>
            <div class="column name">
              <input type="text" id="companyField" v-model="companyTmp.role" required>
              <label for="companyField">Âmbito:</label>
            </div>
          </div>
        </div>
        <!--Divisoria para dar add as empresas associadas-->
        <div class="conf-button">
          <BlueButton @click.prevent="saveCompany" content="Confirmar empresas" />
        </div>
        <div v-for="(company, index) in finalIniciative.companies" :key="index" class="add-emp">
          <h6>Nome: {{ company.name }} - Âmbito: {{ company.role }}</h6>
        </div>
      </div>
      <!--| Duracao Esperada |-->
      <div class="form-group duration" style="text-align:center;">
        <label for="duration">
          <div class="title">
            <h5>Duração Esperada</h5>
          </div>
        </label>
        <input type="text" id="duration" v-model="finalIniciative.expectedDuration">
      </div>
      <!--Fluxo de Eventos-->
      <div class="form-group fluxo">
        <label for="eventFlow">
          <div class="title">
            <h5>Fluxo de Eventos</h5>
          </div>
        </label>
        <textarea id="eventFlow" v-model="finalIniciative.eventFlow" placeholder="Insira aqui o fluxo de eventos..."></textarea>
      </div>
      <!--Materiais e Colaboradores-->
      <div class="form-group mc">
        <div class="row row-cols-2 titles">
          <div class="column">
              <div class="line-with-text" style="text-align:center; width:100%;">
                <label for="professionals" style="height:fit-content;">
                  <p>Colaboradores</p>
                </label>
              </div>
          </div>
          <div class="column"> 
              <div style="text-align:center; width:100%; margin-left: 17vh;" class="line-with-text">
                <label for="materials" style="height:fit-content;">
                  <p>Materiais</p>
                </label>
              </div>
          </div>
        </div>
          <div class="row row-cols-2 col-mat">
            <div class="input-group">
              <div class="column">
                <div class="ola">
                  <div class="conter" style="width:100%;">
                    <div class="expandir" style="width:fit-content;">
                      <BlueButton v-if="closeCollaborators === 'mais'" @click="handleCollaborators" content="+"/>
                      <BlueButton v-if="closeCollaborators === 'menos'" @click="handleCollaboratorsClose" content="-"/>
                    </div>
                    <div class="show">
                      <ShowCollaborators v-if="showCollaborators" :collaborators="collaborators" @collaboratorsSaved="handlerCollaboratorsSaved"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="ola">
                  <div class="conter" style="width:100%; width:fit-content;">
                  <BlueButton v-if="closeMaterials === 'mais'" @click="handleMaterials" content="+"/>
                  <BlueButton v-if="closeMaterials === 'menos'" @click="handleMaterialsClose" content="-"/>
                    <div class="show">
                      <ShowMaterials v-if="showMaterials" :materials="materials" @materialsSaved="handlerMaterialsSaved"/>
                    </div>
                  </div>
                </div>    
              </div>
            </div>
          </div>
      </div>
      <!--Esferas de Avaliação-->
      <div class="form-group final-div">
        <div class="row">
          <div v-if="finalIniciative.expectedSuccessRate === 0">
            <div class="line-with-text">
              <label for="companyField">Nível de Sucesso Esperado</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaBranca"></div>
              <div @click="esferasHandler(40)" class="esferaBranca"></div>
              <div @click="esferasHandler(60)" class="esferaBranca"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="finalIniciative.expectedSuccessRate === 20">
            <div class="line-with-text">
              <label for="companyField">Nível de Sucesso Esperado</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaBranca"></div>
              <div @click="esferasHandler(60)" class="esferaBranca"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="finalIniciative.expectedSuccessRate === 40">
            <div class="line-with-text">
              <label for="companyField">Nível de Sucesso Esperado</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaBranca"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="finalIniciative.expectedSuccessRate === 60">
            <div class="line-with-text">
              <label for="companyField">Nível de Sucesso Esperado</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaVerde"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="finalIniciative.expectedSuccessRate === 80">
            <div class="line-with-text">
              <label for="companyField">Nível de Sucesso Esperado</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaVerde"></div>
              <div @click="esferasHandler(80)" class="esferaVerde"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else>
            <div class="line-with-text">
              <label for="companyField">Nível de Sucesso Esperado</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaVerde"></div>
              <div @click="esferasHandler(80)" class="esferaVerde"></div>
              <div @click="esferasHandler(100)" class="esferaVerde"></div>
            </div>
          </div>
        </div>
        <br>
        <div class="div button" style="margin-left:46.5%;">
            <BlueButton @click="submitForm" content="Guardar" />
        </div>
      </div>
  </form>
  </div>
</template>

<script>
import BlueButton from './BlueButton.vue'
import ShowCollaborators from './ShowCollaborators.vue'
import ShowMaterials from './ShowMaterials.vue'

export default {
  props: ['iniciative'],
  components: { BlueButton, ShowCollaborators, ShowMaterials },
  data() {
    return {
      finalIniciative: {
        photo: '', name: '', birthDate: '', telNumber: '', theme: '', local: '', targetAudience: '',
        minParticipants: 0, maxParticipants: 0, objective: '', date: '', status: 'aceite', email: '', 
        expectedDuration: 0, professionals: [], collaborators: [], materials: [], companies: [], 
        eventFlow: '', expectedSuccessRate: 0, donatives: 0, costs: 0, duration: 0, duringIniciativeAudios: [], 
        duringIniciativePhotos: [], duringIniciativeTexts: [], duringIniciativeVideos: [], participants: 0,
        reportProblem: false, problem: '', participantsAssociated: 0, feedback: []},
      collaborators: [],
      closeCollaborators: 'mais',
      showCollaborators: false,
      materials: [],
      closeMaterials: 'mais',
      showMaterials: false,
      professionalTmp: {name: '', role: '', check: false},
      companyTmp: {name: '', role: ''},
    }
  },
  methods: {
    closeHandler() {
      this.$emit('closeHandler', '')
    },
    saveProfessional() {
      this.finalIniciative.professionals.push(this.professionalTmp)
      this.professionalTmp = {}
    },
    saveCompany() {
      this.finalIniciative.companies.push(this.companyTmp)
      this.companyTmp = {}
    },
    handleCollaborators() {
      if(localStorage.getItem('collaborators')) {
        this.collaborators = JSON.parse(localStorage.getItem('collaborators'))
        this.closeCollaborators = 'menos'
        this.showCollaborators = true
      }
    },
    handleCollaboratorsClose() {
      this.closeCollaborators = 'mais'
      this.showCollaborators = false
    },
    handlerCollaboratorsSaved(collaboratorsSaved) {
      this.collaborators = collaboratorsSaved
      this.closeCollaborators = 'mais'
      this.showCollaborators = false
    },
    handleMaterials() {
      if(localStorage.getItem('materials')) {
        this.materials = JSON.parse(localStorage.getItem('materials'))
        this.closeMaterials = 'menos'
        this.showMaterials = true
      }
    },
    handleMaterialsClose() {
      this.closeMaterials = 'mais'
      this.showMaterials = false
    },
    handlerMaterialsSaved(materialsSaved) {
      this.materials = materialsSaved
      this.closeMaterials = 'mais'
      this.showMaterials = false
    },
    esferasHandler(success) {
      this.finalIniciative.expectedSuccessRate = success
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
      this.finalIniciative.status = 'aceite'
      this.finalIniciative.email = this.iniciative.email
      this.finalIniciative.collaborators = this.collaborators
      this.finalIniciative.materials = this.materials
      
      if(localStorage.getItem('iniciatives')) {
        let iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
        iniciatives.push(this.finalIniciative)
        localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
      }

      if(localStorage.getItem('proposedIniciatives')) {
        let proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
        proposedIniciatives = proposedIniciatives.filter(proposedIniciative => {
            return proposedIniciative.name !== this.iniciative.name;
        })
        localStorage.setItem('proposedIniciatives', JSON.stringify(proposedIniciatives))
      }

      var templateParams = {
        email: this.finalIniciative.email,
        name: this.finalIniciative.name,
        theme: this.finalIniciative.theme,
        local: this.finalIniciative.local,
        targetAudience: this.finalIniciative.targetAudience,
        minParticipants: this.finalIniciative.minParticipants,
        maxParticipants: this.finalIniciative.maxParticipants,
        objective: this.finalIniciative.objective,
        date: this.finalIniciative.date,
        eventFlow: this.finalIniciative.eventFlow,
        expectedSuccessRate: this.finalIniciative.expectedSuccessRate,
        expectedDuration: this.finalIniciative.expectedDuration
      }

      emailjs.send('service_lzqa2yd', 'template_7gxtipj', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          location.reload()
        },
        (error) => {
          console.log('FAILED...', error)
          location.reload()
        }
      )
      alert("Iniciativa registada com sucesso!")
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    document.body.appendChild(script);

    script.onload = () => {
      emailjs.init({
        publicKey: 'acllVfUK9wSzqr0g1',
      })
    }
  }
}
</script>

<style scoped>

.container {
  margin-top: 20px;
  margin-bottom: 20vh;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.1);
}

.title{
  margin-bottom: 3vh;
}

label{
  margin-bottom:2px;
  margin-left:2px;
}

.label-container {
  display: flex;
  justify-content: space-between;
}

.input-group {
  display: flex;
  justify-content: space-between;
  margin-bottom:3vh;
}

.input-group > div {
  flex-basis: 48%;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/**CSS para titulos c/ linha por baixo */
h5{
  text-align: center;
  position:relative;
  padding-bottom: 7px;
}

h5::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to left, #414A9A, #161934);
  border:#161934;
}

/*DIV - Materiais e Colaboradores */

.form-group.mc{
  position: relative; 
  padding-top:10px;
  margin-top: 5vh;
}

.form-group.mc .column{
  display: flex;
}

.form-group.mc p{
  font-size: 20px;
  margin-bottom: 0;
}

.row.row-cols-2.titles{
  height: fit-content;
}

.row.row-cols-2.titles .column{
  text-align: center;
  margin-bottom: 2vh;
  width:46.5%;
}

#mat-title{
  height: fit-content;
}

.ola {
  display:flex;
  align-items: left;
  padding:1.5vh 0 0 1.5vh;
  border: 1px solid white;
  border-radius: 15px;
  width:100%;
  margin-bottom:3vh;
  min-height:100px;
  max-height:170px;
  overflow-y: scroll;  /* Enable vertical scrollbar */
  overflow-x: hidden;
}

.ola label{
  margin-right: 10px;
}

.ola.expandir{
  display:flex;
  align-items: left;
}

.form-group.mc .show{
  padding:10px;
  padding-left: 20px;
}

.ola::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do trilho da barra de rolagem */
    border-radius: 10px; /* Borda arredondada do trilho */
}

.ola::-webkit-scrollbar-thumb {
    background: #888; /* Cor do polegar da barra de rolagem */
    border-radius: 10px; /* Borda arredondada do polegar */
    border: 2px solid #f1f1f1; /* Espaço ao redor do polegar */
}

.ola::-webkit-scrollbar-thumb:hover {
    background: #555; /* Cor do polegar quando em hover */
}

/**DIV - Profissionais associados */
.form-group.prof{
  position: relative;
  margin-bottom: 20px;
  margin-top:5vh;
}

.form-group.prof .conf-button{
  margin-bottom:2vh;
}

.form-group.prof .add-prof{
  margin-top:1vh;
  margin-left:5vh;
}

/**DIV - Empresas Associadas */
.form-group.emp{
  position: relative;
  margin-bottom: 20px;
  margin-top:5vh;
}

.form-group.emp .conf-button{
  margin-bottom:2vh;
}

.form-group.emp .add-emp{
  margin-top:1vh;
  margin-left:5vh;
}



/*Labels c/ animacao do texto */
.column.name {
    position: relative;
    margin: 20px 0;
}

.column.name label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    font-size: 16px;
    color: white;
    padding: 0 5px;
    pointer-events: none;
    transition: .5s;
}

.column.name input {
    width: 100%;
    height: 60px;
    font-size: 16px;
    color: white;
    padding: 0 15px;
    background: transparent;
    border: 1.2px solid #0ef;
    outline: none;
    border: 1px solid white;
    border-radius: 15px;
}

.column.name input:focus~label,
.column.name input:valid~label {
    top: 0;
    font-size: 14px;
    background: white;
    color: black;
    border-radius:4px;
}

/*DIV - duração esperada */
#duration{
  background: transparent;
  color: white;
  border: 1px solid white;
  margin-top: 2vh;
}

.form-group.duration label{
  width: 100%;
}

/**DIV - Fluxo de Eventos */
.form-group.fluxo{
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  margin-top:7vh;
}

.fluxo textarea {
    min-height: 100px; 
    font-size: 14px;
}

input::placeholder,
textarea::placeholder {
    color: #fff; /* Cor do placeholder */
    opacity: 1; /* Certifique-se de que a opacidade seja 1 para que a cor seja visível */
}

#eventFlow{
  margin-top: 2vh;
  border: 1px solid white;
  background-color: transparent;
  color: white;
}

.form-group.fluxo label{
  width: 100%;
}

.form-group.final-div{
  margin-top:11vh;
  text-align: center;
  position: relative;
}

/* div-final Texto sobre as esferas */
.line-with-text {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 10px auto; /* Center the container horizontally */
    width: 80%; /* Adjust the width as needed */
    max-width: 600px; /* Optional: maximum width */
    position: relative;
}

.line-with-text::before,
.line-with-text::after {
    content: "";
    flex: 1;
    border-top: 1px solid white;
    margin: 0 10px;
}

.line-with-text label {
    font-family: Arial, sans-serif;
    background: transparent; /* Same as the background color of the body */
    padding: 0 10px;
    font-size: 16px;
    white-space: nowrap; /* Prevents line break within the label */
}

.esferas-container {
  display: flex;
  justify-content: center;
}

.esferaBranca {
  width: 30px; /* Define a largura da esfera */
  height: 30px; /* Define a altura da esfera */
  background-color: rgb(173, 163, 163); /* Define a cor branca */
  border-radius: 50%; /* Transforma o quadrado em uma esfera */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin-right: 10px;
  cursor: pointer;
}

.esferaVerde {
  width: 30px; /* Define a largura da esfera */
  height: 30px; /* Define a altura da esfera */
  background-color: rgb(5, 118, 10); /* Define a cor branca */
  border-radius: 50%; /* Transforma o quadrado em uma esfera */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin-right: 10px;
  cursor: pointer;
}
 
.button-body.mt-auto{
  text-align: right;
  width:fit-content;
  margin-right: 1vh;
}

.conf-button{
  margin-top: 3vh;
  margin-bottom: 5vh;
  width:fit-content;
}

.div.button{
  text-align: center;
  align-items: end;
  margin-top: 0;
  width:fit-content;
}

</style>