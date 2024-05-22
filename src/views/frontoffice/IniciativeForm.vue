<template>
  <TheHeader />
    <div class="page-container">
      <IniciativeForm />
      <div class="container">
        <div class="row row-cols 2">
          <div class="header2">
            <div class="titulo">   
              <h4>As minhas Iniciativas</h4>
            </div>          
        </div>
        <div class="row row-cols-2">
          <div v-for="proposedIniciative in proposedIniciatives" :key="proposedIniciative.name" class="column">
            <IniciativeInfo :proposedIniciative="proposedIniciative"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TheHeader from '../../components/frontoffice/TheHeader.vue'
  import IniciativeForm from '../../components/frontoffice/IniciativeForm.vue';
  import IniciativeInfo from '../../components/frontoffice/IniciativeInfo.vue'
  import { getAuth, onAuthStateChanged } from "firebase/auth"
  
  export default {
      components: { IniciativeForm, IniciativeInfo, TheHeader },
      data() {
        return {
          proposedIniciatives: [],
          userEmail: ''
        }
      },
      created() {
        if (localStorage.getItem('proposedIniciatives')) {
          const auth = getAuth()
          onAuthStateChanged(auth, (user) => {
            if (user) {
              this.userEmail = user.email

              this.proposedIniciatives = JSON.parse(localStorage.getItem('proposedIniciatives'))
              .filter(proposedIniciative => proposedIniciative.email.includes(this.userEmail))
            }
          })
        }
      }
  }
  </script>
  
  <style scoped>

    .header{
      background: url("@/assets/background-header-image.jpeg");
    }

    .page-container {
      margin-right: 25%;
      display: flex;
      justify-content: flex-start; /* Alinha o conteúdo à esquerda */
      padding-left: 20px; /* Adiciona um espaço à esquerda */
      height:900px;
    }

    .container {
    background: url("@/assets/background-header-image.jpeg");
    padding:0.5rem;
    margin-left: 30%;
    margin-top: 29%;
    transform: translate(-50%, -50%);
    width:850px;
    min-width: 850px;
    height:auto;
    max-height: 35rem;
    border-radius: 20px;
    border: 2px solid #adadad;
    overflow-y: auto; /* Adiciona barra de rolagem vertical */
    overflow-x: hidden;
    scrollbar-width: thin; /* Largura da barra de rolagem para navegadores que suportam o modelo de barra de rolagem padrão */
    scrollbar-color: #888 #f1f1f1; /* Cor da barra de rolagem */
  }

  .titulo {
    text-align: center;
  }

  .column{
    padding-left:30px;
  }

  </style>