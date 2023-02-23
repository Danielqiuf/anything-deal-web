import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import routerHook from './router/route-hook'
import 'lib-flexible'

routerHook(router)
createApp(App).use(store).use(router).mount('#container')
