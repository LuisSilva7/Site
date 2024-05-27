<template>
  <TheHeader class="headerr"/>
  <div class="fundo">
    <div class="conteudo">
      <div class="info">
        <div class="titulo">
          {{ iniciative.theme }}
        </div>
        <div class="objetivo">
          {{ iniciative.objective }}
        </div>
      </div>
      <div class="foto-container">
        <img v-if="iniciative.photo === ''" src="@/assets/default-image.png" id="image" alt="Foto da Iniciativa">
        <img v-else :src="imageUrl" id="image" alt="Foto da Iniciativa">
      </div>
    </div>
    <div class="infoContainer">
      <div class="infoIniciativa">
        <h3>Informações da Iniciativa</h3>
        <p><strong>Público-Alvo: </strong> {{ iniciative.targetAudience }}</p>
        <p><strong>Data:</strong> {{ iniciative.date }}</p>
        <p><strong>Local:</strong> {{ iniciative.local }}</p>
        <p><strong>Máximo de Participantes: </strong> {{ iniciative.minParticipants }}</p>
        <p><strong>Mínimo de Participantes: </strong> {{ iniciative.maxParticipants }}</p>
        <p><strong>Fluxo de Eventos: </strong> {{ iniciative.eventFlow }}</p>
        <p><strong>Duração Esperada: </strong> {{ iniciative.expectedDuration }}</p>
        <p><strong>Percentagem de Sucesso Esperada: </strong> {{ iniciative.expectedSuccessRate }}</p>
        <p><strong>Profisionais Associados</strong></p>
        <div v-for="(professional, index) in iniciative.professionals" :key="index">
          <p>Profisional {{ index + 1}}: {{ professional.name }}</p>
        </div>
        <p><strong>Empresas Associadas</strong></p>
        <div v-for="(company, index) in iniciative.companies" :key="index">
          <p>Empresa {{ index + 1}}: {{ company.name }}</p>
        </div>
         <hr class="status-hr">
         <p> 
          <strong>Status: </strong> 
          <span :class="getStatusClass">{{ iniciative.status }}</span>
        </p> 
      </div>
      <div class="infoPessoais">
        <h3>Informações Pessoais</h3>
        <p><strong>Nome proponente: </strong> {{ iniciative.name }}</p>
        <p><strong>Email: </strong> {{ iniciative.email }}</p>
        <p><strong>Data de Nascimento: </strong> {{ iniciative.birthDate }}</p>
        <p><strong>Número de Telefone: </strong> {{ iniciative.telNumber }}</p>
        <p><strong>Pessoas Associadas à Iniciativa: </strong> {{ iniciative.participantsAssociated }}</p>
        <ButtonIniciatives @click="associar" content="ADERIR" class="button" />
      </div>
    </div>
  </div>
  <Button @click="goBack" content="VOLTAR ATRÁS" class="button" />
</template>

<script>
import TheHeader from '../../components/frontoffice/TheHeader.vue'
import Button from '../../components/frontoffice/Button.vue'
import ButtonIniciatives from '../../components/frontoffice/ButtonIniciatives.vue'
import { getStorage, ref as storageRef, getDownloadURL  } from 'firebase/storage'

export default {
components: { TheHeader, Button, ButtonIniciatives },
data() {
  return {
    iniciative: {},
    imageUrl: ''
  }
},
methods: {
  goBack() {
    this.$router.go(-1)
  },
  associar() {
    this.iniciative.participantsAssociated = this.iniciative.participantsAssociated + 1
    var iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
    const index = iniciatives.findIndex(iniciative => iniciative.theme === this.iniciative.theme)
    iniciatives.splice(index, 1)
    iniciatives.push(this.iniciative)
    localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
  }
},
created() {
    this.iniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.$route.params.theme)

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
},
computed: {
  getStatusClass() {
    if (this.iniciative.status === 'pendente') {
      return 'status-pendente';
    } else if (this.iniciative.status === 'rejeitada') {
      return 'status-rejeitada';
    } else if (this.iniciative.status === 'aceite') {
      return 'status-aceite';
    } else if (this.iniciative.status === 'passada') {
      return 'status-passada';
    } else {
      return '';
    }
  }
}
}
</script>

<style scoped>

*{
color: black;
}
.status-hr {
border: 0;
height: 1px;
width: 50%;
background: #595858;
margin: 10px 0;
}
.traco{
width: 100%;
}

.headerr {
background: url("@/assets/background-header-image.jpeg");
}

.fundo {
display: flex;
flex-direction: column;
align-items: center;
width: 65%;
margin: 0 auto;
background-color: whitesmoke;
padding: 20px;
margin-top: 150px;
border-radius: 20px;
}

.conteudo {
display: flex;
width: 100%;
justify-content: space-between; /* Espaçar os elementos igualmente */
}

.info {
margin-left:5%;

}

.foto-container {
float: right;
margin-left:-50%;
}

#image {
height: 150px;
width: 150px;
border-radius: 10px;
margin-top:-2%;
margin-left:-105%;
}

.titulo {
font-size: 30px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;


}

.objetivo {
margin-left: 5.5%;
max-width: 80%;
font-size: 20px;
margin-bottom: 5%;
}

.divisao {
clear: both;
}

.infoContainer {
margin-left: 15%;
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
}

.infoIniciativa, .infoPessoais {
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

h3 {
margin-bottom: 10px;

}

p {
margin: 5px 0;
}

.button {
margin-top: 30px;
justify-content: center;
display: flex;
}

.status-pendente {
color: rgb(214, 183, 7);
}

.status-rejeitada {
color: red;
}

.status-aceite {
color: green;
}

.status-passada {
color: rgb(71, 35, 4);
}
</style>