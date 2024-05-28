<template>
    <div v-if="!consulted" class="card mb-3" style="max-width: 150rem; max-height:155px; overflow: hidden;">
      <div class="row g-0">
        <div class="col-md-4 d-flex">
          <img v-if="iniciative.photo === ''" src="@/assets/default-image.png"  height="155px" width="160px" id="img" alt="Foto da Iniciativa">
          <img v-else :src="imageUrl"  height="155px" width="150px" alt="Foto da Iniciativa" >
        </div>
        <div class="col-md-8 d-flex flex-column">
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold;">{{ iniciative.theme }}</h5>
            <p class="card-text">Dia: {{ iniciative.date }}</p>
            <p class="card-text">Local: {{ iniciative.local }}</p>
            <BlueButton @click="buttonHandler" content="CONSULTAR" />
          </div>
        </div>
      </div>
    </div>
    <FutureIniciativeBoxConsulted :iniciative="iniciative" @close="handleClose" v-else />
  </template>
  
  <script>
  import BlueButton from './BlueButton.vue'
  import FutureIniciativeBoxConsulted from './FutureIniciativeBoxConsulted.vue'
  import { getStorage, ref as storageRef, getDownloadURL  } from 'firebase/storage'
  
  export default {
    props: ['iniciative'],
    components: { BlueButton, FutureIniciativeBoxConsulted },
    data() {
        return {
            consulted: false,
            imageUrl: ''
        }
    },
    methods: {
        buttonHandler() {
            this.consulted = true
        },
        handleClose() {
            this.consulted = false
        }
    },
    created() {
    const storage = getStorage()

          if (this.iniciative.photo) {
            const imageRef = storageRef(storage, 'images/' + this.iniciative.photo)
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

.card.mb-3 { 
height: auto;
padding-bottom: 3.5rem;
display: flex;
margin-left: 2rem;
margin-top: 5rem; 
border-radius: 10px;
overflow:visible;
background-color: #1B2631;
margin-right: 3%;
}

.col-mg-4 {
height:100%;
width:70%;
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