<template>
  <div class="card mb-3" style="width:90%; overflow: hidden;">
    <div class="row g-0" id="container" >
      <div class="col-md-4 d-flex" style="overflow: hidden;">
        <img v-if="proposedCollaborator.photo === ''" src="@/assets/default-image.png" height="190px" width="130px" id="img" alt="Foto do Colaborador">
        <img v-else :src="imageUrl" height="190px" width="130px" alt="Foto do Colaborador">
      </div>
        <div class="col-md-8 d-flex flex-column" id="texto">
          <div class="card-body">
            <h5 class="card-title">{{ proposedCollaborator.name }}</h5>
            <h6 class="card-text">Data Nascimento: {{ proposedCollaborator.birthDate }}</h6>
            <h6 class="card-text">Email: {{ proposedCollaborator.email }}</h6>
            <h6 class="card-text">Telemóvel: {{ proposedCollaborator.telNumber }}</h6>
            <h6 class="card-text">Morada: {{ proposedCollaborator.address }}</h6>
          </div>
            <div class="card-buttons d-flex">
              <RedButton @click="rejectHandler" content="REJEITAR" style="margin-right: 5%; margin-left: 70%;"/>
              <BlueButton @click="acceptHandler" content="ACEITAR" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BlueButton from './BlueButton.vue'
import RedButton from './RedButton.vue'
import { getStorage, ref as storageRef, getDownloadURL  } from 'firebase/storage'

export default {
  props: ['proposedCollaborator'],
  components: { BlueButton, RedButton },
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
      rejectHandler() {
          const proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
          const updatedCollaborators = proposedCollaborators.filter(collaborator => collaborator.name !== this.proposedCollaborator.name)
          localStorage.setItem('proposedCollaborators', JSON.stringify(updatedCollaborators))

          var templateParams = {
            email: this.proposedCollaborator.email,
            name: this.proposedCollaborator.name,
          }

          emailjs.send('service_esb14f6', 'template_781ps6w', templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              location.reload()
            },
            (error) => {
              console.log('FAILED...', error)
              location.reload()
            }
          )
      },
      acceptHandler() {
          if (localStorage.getItem('proposedCollaborators')) {
              let proposedCollaborators = JSON.parse(localStorage.getItem('proposedCollaborators'))
              let index = proposedCollaborators.findIndex(objeto => objeto.name === this.proposedCollaborator.name);
              proposedCollaborators.splice(index, 1)
              localStorage.setItem('proposedCollaborators', JSON.stringify(proposedCollaborators))

              if (localStorage.getItem('collaborators')) {
                  let collaborators = JSON.parse(localStorage.getItem('collaborators'))
                  collaborators.push(this.proposedCollaborator)
                  localStorage.setItem('collaborators', JSON.stringify(collaborators))
              }

              var templateParams = {
                email: this.proposedCollaborator.email,
                name: this.proposedCollaborator.name,
              }

              emailjs.send('service_esb14f6', 'template_1ykd4cv', templateParams).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                  location.reload()
                },
                (error) => {
                  console.log('FAILED...', error)
                  location.reload()
                }
              )
          }
      },
  },
  created() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    document.body.appendChild(script);

    script.onload = () => {
      emailjs.init({
        publicKey: 'vLZW_TNw6iakG6HaA',
      })
    }


    const storage = getStorage()

          if (this.proposedCollaborator.photo) {
            const imageRef = storageRef(storage, 'images/' + this.proposedCollaborator.photo)
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



#container{
  display: flex;
  width: 100%;
  
}

.card.mb-3 { 
object-fit:contain;
height: 12rem;
display: flex;
flex-direction: row;
margin-left: 2.5rem;
margin-top: 5rem;
margin-bottom:10rem; 
border-radius: 10px;
overflow:visible;
background-color: #1B2631;
}

.row.g-0 {
  height:auto;
  
}

#texto{
  display: flex;
  margin-right: 5%;
}

.col-md-4 {
height:100%;
margin-right: 0%;
width: 25%;
}

.col-md-4 img{
object-fit:cover;
justify-content: center;
place-items: center;
}

.col-md-8 {
width: 55%;
color: white;
font-family: nunito;
height:fit-content;
}

.card-body {
padding: 10px;
}

.card-title,
.card-text {
margin-bottom: 5px; /* Adjust the margin bottom for each element */
}

.card-buttons {
  margin-top:0.5rem;
  
}

.btn {
justify-content: space-between;
color: white;
font-size:13px;
font-style: bold;
border:#161934;
border-radius: 50px;
background-image: linear-gradient(to bottom, #414A9A, #161934);
margin-left: 98%;
margin-bottom: 2%;
}


h5{
  text-align: start;
}

</style>