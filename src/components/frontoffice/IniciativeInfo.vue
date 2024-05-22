<template>
  <div class="quadrado2">
    <div class="conteudo-imagem">
      <img v-if="proposedIniciative.photo === ''" src="@/assets/default-image.png" height="80px" width="80px" alt="Foto da Iniciativa">
      <img v-else :src="proposedIniciative.photo" height="80px" width="80px" alt="Foto da Iniciativa">
    </div>
    <div class="informacoes">
      <div class="date">
        <h4 id="month">{{ month }}</h4>
        <h5 id="day">{{ day }}</h5>
      </div>
      <div class="texto">
        <h5 id="titulo">{{ proposedIniciative.theme }}</h5>
        <p id="local">Local: {{ proposedIniciative.local }}</p>
      </div>
      <button class="botao">Consultar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['proposedIniciative'],
  data() {
    return {
      day: '',
      month: ''
    }
  },
created() {
  var partes = this.proposedIniciative.date.split("-")
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
  this.day = partes[2];
}
}
</script>

<style scoped>

.quadrado2 {
margin-top: 30px;
margin-left:10px;
position: relative;
width: 350px; /* Largura do quadrado */
height: 300px; /* Altura do quadrado */
background-color: #f0f0f0; /* Cor de fundo do quadrado */
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
padding-top:20px;
padding-left:20px;
display: flex;
flex-flow: row nowrap;
justify-content:left;
}

.date {
padding: 0 10px 10px 10px; /* Aqui dá para mexer para centrar no container*/ 
height: 100%;
display: flex;
flex-flow: column nowrap;
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