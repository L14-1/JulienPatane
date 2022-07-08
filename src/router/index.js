import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tarifs from '../views/Tarifs.vue'
import Parcours from '../views/Parcours.vue'
import Bienfaits from '../views/Bienfaits.vue'
import Faq from '../views/Faq.vue'
import Merci from '../views/Merci.vue'
import accompagnementPersonalise from '../views/accompagnement-personalise.vue'
import accompagnementCollectif from '../views/accompagnement-collectif.vue'
import baseDeLaCoherenceCardiaque from '../views/base-de-la-coherence-cardiaque.vue'
import reflexologieCanioSacree from '../views/reflexologie-canio-sacree.vue'
import laPratiqueKinesiologique from '../views/la-pratique-kinesiologique.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accompagnement-personalise',
    name: 'accompagnement-personalise',
    component: accompagnementPersonalise
  },
  {
    path: '/accompagnement-collectif',
    name: 'accompagnement-collectif',
    component: accompagnementCollectif
  },
  {
    path: '/base-de-la-coherence-cardiaque',
    name: 'base-de-la-coherence-cardiaque',
    component: baseDeLaCoherenceCardiaque
  },
  {
    path: '/reflexologie-canio-sacree',
    name: 'reflexologie-canio-sacree',
    component: reflexologieCanioSacree
  },
  {
    path: '/la-pratique-kinesiologique',
    name: 'la-pratique-kinesiologique',
    component: laPratiqueKinesiologique
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
  {
    path: '/merci',
    name: 'Merci',
    component: Merci
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
