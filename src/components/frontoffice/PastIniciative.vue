<template>
  <div @click="redirect" class="quadrado">
      <div class="texto-container">
          <h4>{{ pastIniciative.theme }}</h4>
          <p>Público alvo: {{ pastIniciative.targetAudience }}</p>
      </div>
      <img v-if="pastIniciative.photo === ''" src="@/assets/default-image.png" height="150px" width="150px" id="img" alt="Foto da Iniciativa">
      <img v-else :src="imageUrl" height="150px" width="150px" alt="Foto da Iniciativa" class="opacidade-imagem">
  </div>
</template>

<script>
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'

export default {
  props: ['theme'],
  data() {
      return {
          pastIniciative: {},
          imageUrl: ''
      }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'IniciativePast', params: { theme: this.pastIniciative.theme } })
    }
  },
  created() {
      this.pastIniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.theme)
      const storage = getStorage()

      if (this.pastIniciative.photo) {
          const imageRef = storageRef(storage, 'images/' + this.pastIniciative.photo)
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
.quadrado {
  cursor: pointer;
  position: relative;
  width: 350px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.texto-container {
  position: absolute;
  top: 60%;
  left: 0;
  text-align: center;
  color: solid rgb(255, 255, 255);
  padding: 20px;
  width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add this line */
}

img {
margin: 20px;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
border-radius: 15px; 
}

.opacidade-imagem {
  opacity: 0.4;
}
</style>