import { createRouter, createWebHashHistory } from 'vue-router'
import Todolists from './components/Todolists.vue'


const  router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Todolists,
        },


    ]
})

export { router }