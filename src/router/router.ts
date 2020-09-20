import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './../view/home.vue'
import Doc from './../view/doc.vue'
import DocDefault from './../components/docDefault.vue'
import SwitchDefault from './../components/switchDefault.vue'

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
            component: Doc,
            children: [
                { path: '', component: DocDefault },
                { path: '/doc/switch', component: SwitchDefault }
            ]
        }
    ]
})

export default router