<template>
  <div class="card mb-3" style="max-width: 150rem; max-height:30rem">
    <div class="classe" style="max-width: 150rem; max-height:30rem">
      <div class="row g-0">
        <div class="col-md-3 d-flex">
          <img v-if="proposedIniciative.photo === ''" src="@/assets/default-image.png" height="150px" width="150px" id="img" alt="Foto da Iniciativa">
          <img v-else :src="imageUrl" height="150px" width="150px" alt="Foto da Iniciativa">
        </div>
        <div class="col-md-8 d-flex flex-column">
          <div class="card-body">
            <div class="texto">
              <h5 class="card-title" style="font-weight: bold;">{{ proposedIniciative.theme }}</h5>
              <p class="card-text">Dia: {{ proposedIniciative.date }}</p>
              <p class="card-text">Local: {{ proposedIniciative.local }}</p>
              <p class="card-text">Objetivo: {{ proposedIniciative.objective }}</p>
              <p class="card-text">Dados Proponente:</p>
              <p class="card-text">&nbsp;&nbsp;&nbsp;Nome: {{ proposedIniciative.name }}</p>
              <p class="card-text">&nbsp;&nbsp;&nbsp;Email: {{ proposedIniciative.email }}</p>
              <p class="card-text">&nbsp;&nbsp;&nbsp;Data Nascimento: {{ proposedIniciative.birthDate }}</p>
              <p class="card-text">&nbsp;&nbsp;&nbsp;Telemóvel: {{ proposedIniciative.telNumber }}</p>
              <p class="card-text">Público alvo: {{ proposedIniciative.targetAudience }}</p>
              <p class="card-text">Mínimo Participantes: {{ proposedIniciative.minParticipants }}</p>
              <p class="card-text">Máximo Participantes: {{ proposedIniciative.maxParticipants }}</p>
            </div>
          </div>
        </div>
        <div v-if="!status" class="d-flex justify-content-center">
          <RedButton @click="rejectHandler" content="RECUSAR" />
          <div class="b2">
            <BlueButton @click="createIniciativePlan" content="CRIAR PLANO" />
          </div>
        </div>
      </div>
      <div class="button-body mt-auto">
        <BlueButton @click="closeHandler" content="-" />
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from './BlueButton.vue'
import RedButton from './RedButton.vue'
import CreateIniciativePlan from './CreateIniciativePlan.vue'
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'

export default {
  props: ['proposedIniciative', 'status'],
  components: { BlueButton, RedButton, CreateIniciativePlan },
  data() {
    return {
      createPlan: false,
      imageUrl: ''
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
  },
  created() {
    const storage = getStorage()

    if (this.proposedIniciative.photo) {
      const imageRef = storageRef(storage, 'images/' + this.proposedIniciative.photo)
      getDownloadURL(imageRef)
      .then((url) => {
        console.log('URL da imagem obtida:', url);
        this.imageUrl = url // Retorna a URL da imagem
      })
      .catch((error) => {
        console.error('Erro ao obter URL da imagem:', error)
        throw error; // Lança o erro para ser tratado pelo chamador
      })
    } else {
      const imageRef = storageRef(storage, 'images/' + 'defaultImage.png')
      getDownloadURL(imageRef)
      .then((url) => {
        console.log('URL da imagem obtida:', url);
        this.imageUrl = url // Retorna a URL da imagem
      })
      .catch((error) => {
        console.error('Erro ao obter URL da imagem:', error)
        throw error; // Lança o erro para ser tratado pelo chamador
      })
    }
  }
}
</script>

<style scoped>
.img-fluid {
  height: 30%;
  border-radius: 20px;
}

.classe {
  height: auto;
  min-height: 22rem;
  display: flex;
  border-radius: 10px;
  background-color: #1B2631;
  padding-bottom: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #79758d #1B2631;
}

.card.mb-3 {
  height: auto;
  display: flex;
  margin-left: 2.5rem;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: #1B2631;
}

.col-mg-4 {
  height: 100%;
  margin-right: 0%;
  width: 45%;
}

.col-mg-4 img {
  object-fit: cover;
}

.col-md-8 {
  width: 57%;
  color: white;
  font-family: nunito;
  font-size: 18px;
  height: fit-content;
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
  font-size: 13px;
  font-style: bold;
  border: #161934;
  border-radius: 50px;
  background-image: linear-gradient(to bottom, #414A9A, #161934);
  margin-left: 96%;
  margin-bottom: 2%;
}

.button-body.mt-auto {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  margin-bottom: 70%;
  margin-right: 2%;
  padding-top: 2%;
}

.texto {
  margin-left: 15%;
  min-width: 19rem;
  max-height: 25rem; 
  padding: 10px; 
  }

.d-flex.justify-content-center {
  margin-top: 15%;
  margin-left: 30%;
  min-width: 15rem;
}

.b2 {
  margin-left: 2%;
}
</style>