import Home from '@/views/home/home'
export const layoutRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            sort: 1,
            alive: true,
            transparent: true,
            title: '话费充值',
        },
    },
    {
        path: '/message',
        name: 'message',
        meta: {
            sort: 2,
            title: '消息中心',
        },
        component: () => import('@/views/message/message'),
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            sort: 4,
            alive: true,
            title: '个人中心',
        },
        component: () => import('@/views/user/user'),
    },
    {
        path: '/record',
        name: 'record',
        meta: {
            sort: 3,
            alive: true,
            title: '充值记录',
        },

        component: () => import('@/views/record/record'),
    },
]

export const singleRoutes = [
    {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () => import('@/views/withdrawal/withdrawal'),
        meta: {
            title: '提现',
        },
    },
    {
        path: '/detail/:type',
        name: 'detail',
        component: () => import('@/views/detail-list/detail-list'),
        meta: {
            titleMap: {
                capital: '资金明细',
                recharge: '充值明细',
            },
        },
    },
    {
        path: '/my-custom',
        name: 'my-custom',
        meta: {
            title: '我的客户',
        },
        component: () => import('@/views/my-custom/my-custom'),
    },
]
