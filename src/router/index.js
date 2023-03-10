
import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '../components/HomeComponent.vue'
import Theme1HomeComponent from '../components/theme1/Theme1HomeComponent.vue'

const routes = [
    {
        path: '/',
        name :'home',
        component: HomeComponent
    },
    {
        path: '/theme1',
        name: 'theme1',
        component: Theme1HomeComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router