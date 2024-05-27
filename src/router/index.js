import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '../views/frontoffice/HomeIndex.vue'
import Iniciatives from '../views/frontoffice/Iniciatives.vue'
import IniciativePendent from '../views/frontoffice/IniciativePendent.vue'
import IniciativePast from '../views/frontoffice/IniciativePast.vue'
import IniciativeFuture from '../views/frontoffice/IniciativeFuture.vue'
import IniciativeForm from '../views/frontoffice/IniciativeForm.vue'
import CollaboratorForm from '../views/frontoffice/CollaboratorForm.vue'
import Dashboard from '../views/backoffice/Dashboard.vue'
import MaterialList from '../views/backoffice/MaterialList.vue'
import MaterialAdd from '../views/backoffice/MaterialAdd.vue'
import MaterialEdit from '../views/backoffice/MaterialEdit.vue'
import CollaboratorAdd from '../views/backoffice/CollaboratorAdd.vue'
import CollaboratorList from '../views/backoffice/CollaboratorList.vue'
import CollaboratorEdit from '../views/backoffice/CollaboratorEdit.vue'
import FutureIniciatives from '../views/backoffice/FutureIniciatives.vue'
import PastIniciativesList from '../views/backoffice/PastIniciativesList.vue'
import ProposedIniciativesRejectedList from '../views/backoffice/ProposedIniciativesRejectedList.vue'
import ProposedIniciativesPendentList from '../views/backoffice/ProposedIniciativesPendentList.vue'
import ProposedCollaboratorsList from '../views/backoffice/ProposedCollaboratorsList.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex
  },
  {
    path: '/iniciatives',
    name: 'Iniciatives',
    component: Iniciatives
  },
  {
    path: '/iniciativePendent/:theme',
    name: 'IniciativePendent',
    component: IniciativePendent,
    props: true
  },
  {
    path: '/iniciativePast/:theme',
    name: 'IniciativePast',
    component: IniciativePast,
    props: true
  },
  {
    path: '/iniciativeFuture/:theme',
    name: 'IniciativeFuture',
    component: IniciativeFuture,
    props: true
  },
  {
    path: '/iniciativeForm',
    name: 'IniciativeForm',
    component: IniciativeForm,
    meta: { requiresAuth: true }
  },
  {
    path: '/collaboratorForm',
    name: 'CollaboratorForm',
    component: CollaboratorForm,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/collaboratorsList',
    name: 'CollaboratorList',
    component: CollaboratorList,
    meta: { requiresAuth: true }
  },
  {
    path: '/collaboratorsAdd',
    name: 'CollaboratorAdd',
    component: CollaboratorAdd,
    meta: { requiresAuth: true }
  },
  {
    path: '/collaboratorsEdit/:index',
    name: 'CollaboratorEdit',
    component: CollaboratorEdit,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/materialsList',
    name: 'MaterialList',
    component: MaterialList,
    meta: { requiresAuth: true }
  },
  {
    path: '/materialsAdd',
    name: 'MaterialAdd',
    component: MaterialAdd,
    meta: { requiresAuth: true }
  },
  {
    path: '/materialsEdit/:index',
    name: 'MaterialEdit',
    component: MaterialEdit,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/pastIniciatives',
    name: 'PastIniciativesList',
    component: PastIniciativesList,
    meta: { requiresAuth: true }
  },
  {
    path: '/futureIniciatives',
    name: 'FutureIniciatives',
    component: FutureIniciatives,
    meta: { requiresAuth: true }
  },
  {
    path: '/proposedIniciativesPendent',
    name: 'ProposedIniciativesPendentList',
    component: ProposedIniciativesPendentList,
    meta: { requiresAuth: true }
  },
  {
    path: '/proposedIniciativesRejected',
    name: 'ProposedIniciativesRejectedList',
    component: ProposedIniciativesRejectedList,
    meta: { requiresAuth: true }
  },
  {
    path: '/proposedCollaborators',
    name: 'ProposedCollaboratorsList',
    component: ProposedCollaboratorsList,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {

  if(to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser()
    if(user) {
      next()
    }
    else {
      alert("É necessário fazer login para realizar esta operação!")
      next("/")
    }
  }
  else {
    next()
  }
})

export default router
