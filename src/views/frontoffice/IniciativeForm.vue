<template>
  <TheHeader />
    <div class="page-container">
      <IniciativeForm />
      <div>
        <h3>AS MINHAS INICIATIVAS</h3>
        <div v-for="proposedIniciative in proposedIniciatives" :key="proposedIniciative.name">
          <IniciativeInfo />
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
  .page-container {
    margin-right: 30%;
    display: flex;
    justify-content: flex-start; /* Alinha o conteúdo à esquerda */
    padding-left: 20px; /* Adiciona um espaço à esquerda */
  }
  </style>