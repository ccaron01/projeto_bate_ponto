import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/Cadastro',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/CadastroView.vue')
    },
    {
        path: '/account',
        name: 'account',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/AccountView.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router