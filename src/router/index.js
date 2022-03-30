import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Prestations from '../views/Prestations.vue'
import Tarifs from '../views/Tarifs.vue'
import Parcours from '../views/Parcours.vue'
import Bienfaits from '../views/Bienfaits.vue'
import Faq from '../views/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prestations',
    name: 'Prestations',
    component: Prestations
  },
  {
    path: '/tarifs',
    name: 'Tarifs',
    component: Tarifs
  },
  {
    path: '/mon-parcours',
    name: 'Parcours',
    component: Parcours
  },
  {
    path: '/les-bienfaits-du-sport',
    name: 'Bienfaits',
    component: Bienfaits
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  
]

const router = new VueRouter({
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // },
  scrollBehavior: function(to) {
    if (to.hash) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 150 },
          behavior: 'smooth'
        }
    } else {
        return { x: 0, y: 0 }
    }
  },
})

export default router
