<template>
  <header class="header">
    <div class="left-content">
      <img src="@/assets/logo-main-image.png" alt="logo">
      <h2>GoHelp</h2>
    </div>
    <div class="right-content">
      <router-link to="/"><h3>Home</h3></router-link>
      <router-link to="/iniciatives"><h3>Iniciativas</h3></router-link>
      <router-link v-if="isCollaborator" to="/dashboard"><h3>Backoffice</h3></router-link>
      <h3 @click="signInWithGoogle" v-if="!isLoggedIn">Login</h3>
      <!--<img v-if="imageData" :src="imageData" alt="Imagem" height="100px" width="100px">-->
      <h3 @click="handleSignOut" v-if="isLoggedIn">Logout</h3>
    </div>
  </header>
</template>

<script setup>
    import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"
    import { useRouter } from 'vue-router'
    import { onMounted, ref } from "vue"

    const router = useRouter()
    let isLoggedIn = ref(false)
    let isCollaborator = ref(false)
    let auth
    let imageData = ''

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user)
            router.push("/")
            location.reload()
        })
        .catch((error) => {
            console.log("erro")
        })
    }

    onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user) {
        isLoggedIn.value = true
        if(JSON.parse(localStorage.getItem('backofficeEmails')).includes(user.email)) {
          isCollaborator.value = true
        }

        /*const storedImage = JSON.parse(localStorage.getItem('proposedIniciatives')); // Obtém a imagem armazenada no localStorage
        if (storedImage) {
          imageData = storedImage[1].photo; // Exibe a imagem
        } else {
          alert('Nenhuma imagem encontrada no localStorage.');
        }*/
      }
      else {
        isLoggedIn = false
      }
    })
  })

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/")
      location.reload()
    })
  }
</script>
  
  <style scoped>
  *{ 
  
  width: 100%;
  }
  
  h2{

    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    font-size: 3.5em;
  }
  
 h3 {
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5em;
    cursor: pointer;
    display: inline-block;
    margin-left: auto;
    

}

h3:hover {
    
    color: #9d9c9c;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Adiciona uma sombra para destacar o texto */
    
}

  
  .header {
    color: #fff;
    display: flex;
    
  }
  
  .left-content {
    display: flex;
    align-items: center;
  }
  
  .right-content {
    
    display: flex;
    align-items: center;
    width: 50%;
    text-align: center;
  
    
  }
  
  .left-content img {
    width: 110px;
    height: 100px;
  }
  
  .right-content img { 
    position: relative;
    width: 120px;
    height: 50px;
  }
  </style>