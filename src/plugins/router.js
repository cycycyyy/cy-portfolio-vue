import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/About',
        name: 'About',
        component: () => import('@/views/About.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router