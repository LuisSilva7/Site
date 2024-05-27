<template>
    <div class="card mb-3" style="max-width: 150rem; max-height:26rem">
      <div class="classe" style="max-width: 150rem; max-height:26rem">
        <div class="row g-0">
          <div class="col-md-3 d-flex">
            <img v-if="iniciative.photo === ''" src="@/assets/default-image.png" height="150px" width="150px" id="img" alt="Foto da Iniciativa">
            <img v-else :src="imageUrl" height="150px" width="150px" alt="Foto da Iniciativa">
          </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <div class="texto">
                <h5 class="card-title" style="font-weight: bold;">{{ iniciative.theme }}</h5>
                <p class="card-text">Dia: {{ iniciative.date }}</p>
                <p class="card-text">Local: {{ iniciative.local }}</p>
                <p class="card-text">Objetivo: {{ iniciative.objective }}</p>
                <p class="card-text">Dados Proponente:</p>
                <p class="card-text">&nbsp;&nbsp;&nbsp;Nome: {{ iniciative.name }}</p>
                <p class="card-text">&nbsp;&nbsp;&nbsp;Email: {{ iniciative.email }}</p>
                <p class="card-text">&nbsp;&nbsp;&nbsp;Data Nascimento: {{ iniciative.birthDate }}</p>
                <p class="card-text">&nbsp;&nbsp;&nbsp;Telemóvel: {{ iniciative.telNumber }}</p>
                <p class="card-text">Público alvo: {{ iniciative.targetAudience }}</p>
                <p class="card-text">Mínimo Participantes: {{ iniciative.minParticipants }}</p>
                <p class="card-text">Máximo Participantes: {{ iniciative.maxParticipants }}</p>
                <p class="card-text">Participantes Presentes: {{ iniciative.participants }}</p>
                <p class="card-text">Duração Esperada: {{ iniciative.expectedDuration }} minutos</p>
                <p class="card-text">Duração: {{ iniciative.duration }} minutos</p>
                <p class="card-text">Nível de Sucesso Esperado: {{ iniciative.expectedSuccessRate }} %</p>
                <p class="card-text">Nível de Sucesso: {{ iniciative.successRate }} %</p>
                <p class="card-text">Fluxo de Eventos: {{ iniciative.eventFlow }}</p>
                <p class="card-text">Montante Doado: {{ iniciative.donatives }} €</p>
                <p class="card-text">Custos: {{ iniciative.costs }} €</p>
                <p class="card-text">Colaboradores Associados</p>
                <div v-for="(collaborator, index) in iniciative.collaborators" :key="index">
                  <p class="card-text">Colaborador {{ index + 1 }}: {{ collaborator.name }}</p>
                </div>
                <p class="card-text">Materiais Associados</p>
                <div v-for="(material, index) in iniciative.materials" :key="index">
                  <p class="card-text">Material {{ index + 1 }}: {{ material.name }}</p>
                </div>
                <p class="card-text">Professionais Associados</p>
                <div v-for="(professional, index) in iniciative.professionals" :key="index">
                  <p class="card-text">Professional {{ index + 1 }}: {{ professional.name }}</p>
                </div>
                <p class="card-text">Empresas Associadas</p>
                <div v-for="(company, index) in iniciative.companies" :key="index">
                  <p class="card-text">Empresa {{ index + 1 }}: {{ company.name }}</p>
                </div>
              </div>
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
  import BlueButton from "./BlueButton.vue";
  import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
  
  export default {
    props: ["iniciative"],
    components: { BlueButton },
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      closeHandler() {
        this.$emit("close", "");
      },
    },
    created() {
      const storage = getStorage();
  
      if (this.iniciative.photo) {
        const imageRef = storageRef(storage, 'images/' + this.iniciative.photo);
        getDownloadURL(imageRef)
          .then((url) => {
            console.log('URL da imagem obtida:', url);
            this.imageUrl = url; // Retorna a URL da imagem
          })
          .catch((error) => {
            console.error('Erro ao obter URL da imagem:', error);
            throw error; // Lança o erro para ser tratado pelo chamador
          });
      } else {
        const imageRef = storageRef(storage, 'images/' + 'defaultImage.png');
        getDownloadURL(imageRef)
          .then((url) => {
            console.log('URL da imagem obtida:', url);
            this.imageUrl = url; // Retorna a URL da imagem
          })
          .catch((error) => {
            console.error('Erro ao obter URL da imagem:', error);
            throw error; // Lança o erro para ser tratado pelo chamador
          });
      }
    }
  };
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
    margin-bottom: 10px;
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
    max-height: 25rem; /* Define a altura máxima da caixa de texto */
  }
  
  .d-flex.justify-content-center {
    margin-top: 0%;
    margin-left: 35%;
    min-width: 15rem;
  }
  
  .b2 {
    margin-left: 2%;
  }
  </style>
