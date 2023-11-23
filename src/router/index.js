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
import GerenciamentoUsuario from "../views/GerenciamentoUsuario.vue"

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
    component: GerenciamentoArmarioView,
    meta: { requiresAuth: true } // add meta field to indicate that this route requires authentication
  },
  {
    path: '/gerenciamentoBox/:id',
    name: 'gerenciamentoBox',
    component: GerenciamentoBoxView,
    meta: { requiresAuth: true } // add meta field to indicate that this route requires authentication
  },
  {
    path: '/lista/:id',
    name: 'lista',
    component: ListaView,
    meta: { requiresAuth: true } // add meta field to indicate that this route requires authentication
  },
  {
    path: '/gerenciamentoUsuario',
    name: 'gerenciamentoUsuario',
    component: GerenciamentoUsuario,
    meta: { requiresAuth: true } // add meta field to indicate that this route requires authentication
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

// add navigation guard to check if the user is authenticated before accessing the management routes


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  const protectedRoutes = ['/gerenciamentoArmario', '/gerenciamentoBox/:id', '/lista/:id', '/selecionarTipo']
  if (protectedRoutes.includes(to.path) && !isAuthenticated) {
    next('/')
  } else if (to.path === '/login' && isAuthenticated) {
    next('/selecionarTipo')
  } else if (to.path === '/' && isAuthenticated) {
    next('/selecionarTipo')
  } else if (to.path === '/gerenciamentoUsuario' && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router


