<template>
  <div class="quadrado2">
    <div class="conteudo-imagem">
      <div class="row row-cols-2">
        <div class="col" id="left-side">
          <img v-if="finalIniciative.photo === ''" src="@/assets/default-image.png" height="100px" width="175px" alt="Foto da Iniciativa">
          <img v-else :src="imageUrl" height="100px" width="175px" alt="Foto da Iniciativa">
        </div>
        <div class="col">
          <div class="date">
            <h3 id="month">{{ month }}</h3>
            <h4 id="day">{{ day }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="informacoes">
      <div class="texto">
        <h6 id="titulo">{{ finalIniciative.theme }}</h6>
        <p id="local">Local: {{ finalIniciative.local }}</p>
        <p id="state">Estado: {{ finalIniciative.status}}</p>
      </div>
      <button class="botao" @click="consultar">Consultar</button>
    </div>
  </div>
</template>

<script>
import { getStorage, ref as storageRef, getDownloadURL  } from 'firebase/storage'

export default {
  props: ['proposedIniciativeTheme', 'iniciativeTheme'],
  data() {
    return {
      finalIniciative: {},
      imageUrl: '',
      day: '',
      month: ''
    }
  },
  methods: {
    consultar() {
      if(this.proposedIniciativeTheme) {
        this.$router.push({ name: 'IniciativePendent', params: { theme: this.finalIniciative.theme } })
      }
      else {
        if(this.finalIniciative.status === 'aceite') {
          this.$router.push({ name: 'IniciativeFuture', params: { theme: this.finalIniciative.theme } })
        }
        else {
          this.$router.push({ name: 'IniciativePast', params: { theme: this.finalIniciative.theme } })
        }
      }
    }
  },
created() {
  var partes = ''
  if(this.proposedIniciativeTheme) {
    this.finalIniciative = JSON.parse(localStorage.getItem('proposedIniciatives')).find(iniciative => iniciative.theme === this.proposedIniciativeTheme)
    partes = this.finalIniciative.date.split("-")
  }
  else {
    this.finalIniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.iniciativeTheme)
    partes = this.finalIniciative.date.split("-")
  }

  if(partes[1] === '01') {
    this.month = 'Jan'
  }
  if(partes[1] === '02') {
    this.month = 'Fev'
  }
  if(partes[1] === '03') {
    this.month = 'Mar'
  }
  if(partes[1] === '04') {
    this.month = 'Abr'
  }
  if(partes[1] === '05') {
    this.month = 'Mai'
  }
  if(partes[1] === '06') {
    this.month = 'Jun'
  }
  if(partes[1] === '07') {
    this.month = 'Jul'
  }
  if(partes[1] === '08') {
    this.month = 'Ago'
  }
  if(partes[1] === '09') {
    this.month = 'Set'
  }
  if(partes[1] === '10') {
    this.month = 'Out'
  }
  if(partes[1] === '11') {
    this.month = 'Nov'
  }
  if(partes[1] === '12') {
    this.month = 'Dez'
  }
  this.day = partes[2]

  const storage = getStorage()

          if (this.finalIniciative.photo) {
            const imageRef = storageRef(storage, 'images/' + this.finalIniciative.photo)
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

.quadrado2 {
margin-top: 30px;
margin-left:40px;
position: relative;
width: 300px; /* Largura do quadrado */
height: 200px; /* Altura do quadrado */
background-color:#ffffff;
border-radius: 30px; /* Borda arredondada */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
overflow: hidden; /* Para esconder partes da imagem que saem do quadrado */

}

.conteudo-imagem {
position: relative;
width: 100%;
height: 100%; 
overflow: hidden;
margin:0;
}

#img {
  display: block; /* Garante que a imagem seja exibida como bloco */
  width: 100%; /* Garante que a imagem não ultrapasse a largura do quadrado */
  height: 50%; /* Garante que a imagem não ultrapasse a altura do quadrado */
  margin: auto; 
  overflow: hidden;
}

.informacoes {
background-color:#ffffff;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 50%;
text-align: center;
padding-top:10px;
padding-left:10px;
display: flex;
flex-flow: row nowrap;
justify-content:left;
}

p{
  font-size:smaller;
  color: black;
}

.date {
margin-left: 7vh;
margin-top:3vh;
height: 100%;
display: flex;
flex-flow: column nowrap;
text-align: left;
}

#day{
  padding-left: 10px;
}

#month {
margin-bottom: 0;
text-align:justify;
color: crimson;
}

#day {
color: black;
}

.texto {
padding-left: 10px;
padding-top: 3px;
flex-grow:5;
text-align: left;
}

#titulo {
margin-bottom: 5px;
font-weight: bold;
color:black;
}

#local {
margin-bottom: 3px;
color:black;
}

#numero {
color:black;
}

.botao {
position: absolute;
bottom: 0;
right: 0;
background-color: #ffffff; /* Cor do botão */
color: #7e0a0a; /* Cor do texto do botão */
border: none;
border-radius: 30px 0 0 0; /* Borda arredondada - tenho que definir apenas a esquerda superior e direita inferior */
padding: 7px 14px; /* Espaçamento interno */
cursor: pointer;
transition: background-color 0.3s ease; /* Transição suave de cor de fundo */
border: 2px solid black;
border-bottom-right-radius: 30px;
}

.botao:hover {
background-color: #bcc2c7; /* Cor do botão ao passar o mouse */
}
</style>