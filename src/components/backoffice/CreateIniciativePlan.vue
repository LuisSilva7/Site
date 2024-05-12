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
        <label for="professionals">Colaboradores</label>
        <BlueButton v-if="closeCollaborators === 'mais'" @click="handleCollaborators" content="+"/>
        <BlueButton v-if="closeCollaborators === 'menos'" @click="handleCollaboratorsClose" content="-"/>
        <ShowCollaborators v-if="showCollaborators" :collaborators="collaborators" @collaboratorsSaved="handlerCollaboratorsSaved"/>
        <div v-if="collaborators">
          <div v-for="(collaborator, index) in collaborators" :key="index">
            <p>Colaborador{{ index + 1 }} - {{ collaborator.name }}</p>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="materials">Materiais</label>
        <BlueButton v-if="closeMaterials === 'mais'" @click="handleMaterials" content="+"/>
        <BlueButton v-if="closeMaterials === 'menos'" @click="handleMaterialsClose" content="-"/>
        <ShowMaterials v-if="showMaterials" :materials="materials" @materialsSaved="handlerMaterialsSaved"/>
      </div>
      <div class="form-group">
        <h5>Profissionais Associados</h5>
        <div class="input-group">
          <div>
            <label for="professionalName">Nome:</label>
            <input type="text" id="professionalName" v-model="professionalTmp.name">
          </div>
          <div>
            <label for="professionalRole">Cargo:</label>
            <input type="text" id="professionalRole" v-model="professionalTmp.role">
          </div>
          <BlueButton @click.prevent="saveProfessional" content="Confirmar profissionais" />
        </div>
        <div v-for="(professional, index) in finalIniciative.professionals" :key="index">
          <h6>Nome: {{ professional.name }} - Cargo: {{ professional.role }}</h6>
        </div>
      </div>
      <div class="form-group">
        <h5>Empresas Associadas</h5>
        <div class="input-group">
          <div>
            <label for="companyName">Nome:</label>
            <input type="text" id="companyName" v-model="companyTmp.name">
          </div>
          <div>
            <label for="companyField">Âmbito:</label>
            <input type="text" id="companyField" v-model="companyTmp.role">
          </div>
          <BlueButton @click.prevent="saveCompany" content="Confirmar empresas" />
        </div>
        <div v-for="(company, index) in finalIniciative.companies" :key="index">
          <h6>Nome: {{ company.name }} - Âmbito: {{ company.role }}</h6>
        </div>
      </div>
      <div class="form-group">
        <label for="eventFlow">Fluxo de Eventos:</label>
        <textarea id="eventFlow" v-model="finalIniciative.eventFlow"></textarea>
      </div>
      <div v-if="finalIniciative.expectedSuccessRate === 0">
        <label for="companyField">Nível Sucesso Esperado:</label>
        <div class="esferas-container">
          <div @click="esferasHandler(20)" class="esferaBranca"></div>
          <div @click="esferasHandler(40)" class="esferaBranca"></div>
          <div @click="esferasHandler(60)" class="esferaBranca"></div>
          <div @click="esferasHandler(80)" class="esferaBranca"></div>
          <div @click="esferasHandler(100)" class="esferaBranca"></div>
        </div>
      </div>
      <div v-else-if="finalIniciative.expectedSuccessRate === 20">
        <label for="companyField">Nível Sucesso Esperado:</label>
        <div class="esferas-container">
          <div @click="esferasHandler(20)" class="esferaVerde"></div>
          <div @click="esferasHandler(40)" class="esferaBranca"></div>
          <div @click="esferasHandler(60)" class="esferaBranca"></div>
          <div @click="esferasHandler(80)" class="esferaBranca"></div>
          <div @click="esferasHandler(100)" class="esferaBranca"></div>
        </div>
      </div>
      <div v-else-if="finalIniciative.expectedSuccessRate === 40">
        <label for="companyField">Nível Sucesso Esperado:</label>
        <div class="esferas-container">
          <div @click="esferasHandler(20)" class="esferaVerde"></div>
          <div @click="esferasHandler(40)" class="esferaVerde"></div>
          <div @click="esferasHandler(60)" class="esferaBranca"></div>
          <div @click="esferasHandler(80)" class="esferaBranca"></div>
          <div @click="esferasHandler(100)" class="esferaBranca"></div>
        </div>
      </div>
      <div v-else-if="finalIniciative.expectedSuccessRate === 60">
        <label for="companyField">Nível Sucesso Esperado:</label>
        <div class="esferas-container">
          <div @click="esferasHandler(20)" class="esferaVerde"></div>
          <div @click="esferasHandler(40)" class="esferaVerde"></div>
          <div @click="esferasHandler(60)" class="esferaVerde"></div>
          <div @click="esferasHandler(80)" class="esferaBranca"></div>
          <div @click="esferasHandler(100)" class="esferaBranca"></div>
        </div>
      </div>
      <div v-else-if="finalIniciative.expectedSuccessRate === 80">
        <label for="companyField">Nível Sucesso Esperado:</label>
        <div class="esferas-container">
          <div @click="esferasHandler(20)" class="esferaVerde"></div>
          <div @click="esferasHandler(40)" class="esferaVerde"></div>
          <div @click="esferasHandler(60)" class="esferaVerde"></div>
          <div @click="esferasHandler(80)" class="esferaVerde"></div>
          <div @click="esferasHandler(100)" class="esferaBranca"></div>
        </div>
      </div>
      <div v-else>
        <label for="companyField">Nível Sucesso Esperado:</label>
        <div class="esferas-container">
          <div @click="esferasHandler(20)" class="esferaVerde"></div>
          <div @click="esferasHandler(40)" class="esferaVerde"></div>
          <div @click="esferasHandler(60)" class="esferaVerde"></div>
          <div @click="esferasHandler(80)" class="esferaVerde"></div>
          <div @click="esferasHandler(100)" class="esferaVerde"></div>
        </div>
      </div>
      <br>
      <BlueButton @click="submitForm" content="Guardar" />
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
        eventFlow: '', expectedSuccessRate: 0},
      collaborators: [],
      closeCollaborators: 'mais',
      showCollaborators: false,
      materials: [],
      closeMaterials: 'mais',
      showMaterials: false,
      professionalTmp: {name: '', role: ''},
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
      location.reload()
      alert("Iniciativa registada com sucesso!")
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

.label-container {
  display: flex;
  justify-content: space-between;
}

.input-group {
  display: flex;
  justify-content: space-between;
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

.esferas-container {
  display: flex;
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
</style>