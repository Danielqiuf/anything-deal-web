import { createRouter, createWebHashHistory } from 'vue-router'
import Container from '@/layout/container'
import { layoutRoutes, singleRoutes } from './views-route'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Container,
            children: layoutRoutes,
        },
        {
            path: '/404',
            meta: {
                title: '页面不存在',
            },
            component: () => import('@/views/404'),
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/404',
        },
        ...singleRoutes,
    ],
})

export default router
