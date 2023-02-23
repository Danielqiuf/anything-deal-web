import { layoutRoutes } from '@/router/views-route'
import { shallowRef, toRaw } from 'vue'

export default (router) => {
    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            document.title = to.meta.title
        } else if (to.meta.titleMap) {
            const detailType = to.params.type
            const title = to.meta.titleMap[detailType]
            if (typeof title !== 'undefined') {
                document.title = title
            } else {
                next('/404')
            }
        }

        next()
    })
}

export const useRouteMap = () => {
    const sortedRoutes = shallowRef([])

    sortedRoutes.value = layoutRoutes.sort((a, b) => a.meta.sort - b.meta.sort)

    return toRaw(sortedRoutes.value)
}
