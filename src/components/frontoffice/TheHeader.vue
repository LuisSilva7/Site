<template>
  <header class="header">
    <div @click="goHome" class="logo">
      <div class="row row-cols-2">
        <div class="col-4">
          <img src="@/assets/logo-main-image.png" alt="logo">
        </div>
        <div class="col-2" id="logo-text">
          <h2>GoHelp</h2>
        </div>
      </div>
    </div>
    <div class="navbar">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/"><a>Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/iniciatives"><a>Iniciativas</a></router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="isCollaborator" to="/dashboard"><a>Backoffice</a></router-link>
        </li>
        <li class="nav-item">
          <a @click="signInWithGoogle" v-if="!isLoggedIn">Login</a>
        </li>
        <li class="nav-item">
          <a @click="handleSignOut" v-if="isLoggedIn">Logout</a>
        </li>
      </ul>
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

    const goHome = () => {
      router.push('/')
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user)
            router.push("/")
            location.reload()
        })
        .catch((error) => {
            console.log(error)
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
  
* { 
  box-sizing: border-box;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  z-index: 100;
  background-color: #5b5a5e8a;
}

/* Estilos da logo */
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.row.row-cols-2 {
  display: flex;
  align-items: center;
  margin-bottom:2vh;
}

.row.row-cols-2 img {
  width: 120px;
  height: 120px;
  padding-right:0;
}

#logo-text h2 {
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  font-size: 3.5em;
  margin: 0;
}


.navbar {
  display: flex;
  align-items: center;
  text-align: center;
  width: auto;
}

.nav {
  display: flex;
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}

.nav-pills {
  display: flex; /* Use flexbox for nav items */
  align-items: center; /* Align items vertically centered */
}

.nav-item {
  margin-right: 20px; 
}

.nav-item a {
  font-size: 21px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding:8px;
}

.nav-item a:hover {
  color: #9d9c9c;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.nav-item a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background: #fff;
  transition: .7s;
}

.nav-item a:hover::before {
  width: 100%;
}

a {
  color: #fff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5em;
  cursor: pointer;
}
  </style>