<template>
  <div class="quadrado4">
    <div class="conteudo-imagem">
      <img v-if="iniciative.photo === ''" src="@/assets/default-image.png" alt="Foto da Iniciativa" class="iniciative-image">
      <img v-else :src="imageUrl" alt="Foto da Iniciativa" class="iniciative-image">
    </div>
    <div class="informacoes">
      <div class="date">
        <h4 id="month">{{ month }}</h4>
        <h5 id="day">{{ day }}</h5>
      </div>
      <div class="texto">
        <h5 id="titulo">{{ iniciative.theme }}</h5>
        <p id="local">Local: {{ iniciative.local }}</p>
        <p id="numero">Nº min de participantes: {{ iniciative.minParticipants }}</p>
      </div>
      <button @click="redirect" class="botao">Consultar</button>
    </div>
  </div>
</template>

<script>
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

export default {
  props: ['theme'],
  data() {
    return {
      imageUrl: '',
      iniciative: {},
      month: '',
      day: ''
    };
  },
  methods: {
    redirect() {
      if(this.iniciative.status === 'aceite') {
          this.$router.push({ name: 'IniciativeFuture', params: { theme: this.iniciative.theme } })
        }
        else {
          this.$router.push({ name: 'IniciativePast', params: { theme: this.iniciative.theme } })
        }
    }
  },
  created() {
    this.iniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.theme);

    var partes = this.iniciative.date.split("-");
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    this.month = monthNames[parseInt(partes[1], 10) - 1];
    this.day = partes[2];

    const storage = getStorage();
    const imageName = this.iniciative.photo || 'defaultImage.png';
    const imageRef = storageRef(storage, 'images/' + imageName);

    getDownloadURL(imageRef)
      .then((url) => {
        this.imageUrl = url;
      })
      .catch((error) => {
        console.error('Erro ao obter URL da imagem:', error);
        throw error;
      });
  }
};
</script>

<style scoped>
.quadrado4 {
  margin-top: 60px;
  margin-left: 5%;
  position: relative;
  width: 320px; /* Largura do quadrado */
  height: 300px; /* Altura do quadrado */
  background-color: #f0f0f0; /* Cor de fundo do quadrado */
  border-radius: 30px; /* Borda arredondada */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  overflow: hidden; /* Para esconder partes da imagem que saem do quadrado */
  
}

p{
  font-size: 0.8em;
}

.conteudo-imagem {
  width: 100%;
  height: 50%; /* A altura da imagem ocupará 50% do contêiner */
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5); /* Sobreposição escura com 50% de opacidade */

}

.iniciative-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz a imagem preencher o espaço sem distorção */
  object-position: center; /* Centraliza a imagem no contêiner */
}

.informacoes {
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
}

.date {
  margin-top: -3%;
  margin-left: -3%;
  padding: 0 10px 10px 10px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}

#month {
  margin-bottom: 0;
  text-align: justify;
  color: crimson;
}

#day {
  color: black;
}

.texto {
  margin-top: -2%;
  padding-left: 2%;
  flex-grow: 5;
  text-align: left;
  max-width: 70%;
  
}

#titulo {
  font-size: 1em;
  margin-bottom: 2px;
  font-weight: bold;
  color: black;
  max-width: 1000%;
}

#local {
  margin-bottom: 3px;
  color: black;
}

#numero {
  color: black;
}

.botao {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  color: #7e0a0a;
  border: none;
  border-radius: 30px 0 0 0;
  padding: 7px 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 2px solid black;
  border-bottom-right-radius: 30px;
}

.botao:hover {
  background-color: #bcc2c7;
}
</style>