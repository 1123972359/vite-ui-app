import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/home.vue'
import Doc from './view/doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
