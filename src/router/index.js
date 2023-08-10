import Vue from 'vue'
import VueRouter from 'vue-router'
import AcessoView from '../views/AcessoView.vue'
import LoginView from "../views/LoginView.vue"
import PublicoView from "../views/PublicoView.vue"
import CadastroView from "../views/CadastroView.vue"
import SelicionarTipoView from "../views/SelecionarTipoView.vue"
import GerenciamentoArmarioView from "../views/GerenciamentoArmarioView.vue"
import GerenciamentoBoxView from "../views/GerenciamentoBoxView"
import ListaView from "../views/ListaView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'acesso',
    component: AcessoView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/publico',
    name: 'publico',
    component: PublicoView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/selecionarTipo',
    name: 'selecionarTipo',
    component: SelicionarTipoView
  },
  {
    path: '/gerenciamentoArmario',
    name: 'gerenciamentoArmario',
    component: GerenciamentoArmarioView
  },
  {
    path: '/gerenciamentoBox',
    name: 'gerenciamentoBox',
    component: GerenciamentoBoxView
  },
  {
    path: '/lista/:id',
    name: 'lista',
    component: ListaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
