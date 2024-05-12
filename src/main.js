import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/global.css'
import store from './store'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSBhhJZfcQE3bsABgYPK0sZlJeRyGJkak",
  authDomain: "projetopw-4c35b.firebaseapp.com",
  projectId: "projetopw-4c35b",
  storageBucket: "projetopw-4c35b.appspot.com",
  messagingSenderId: "62984874544",
  appId: "1:62984874544:web:dff7afbfde6314aad15bf5"
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router).use(bootstrap).use(store)

app.mount('#app')