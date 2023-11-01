import { createApp } from 'vue'
import './style.css'
import './partials/_general.scss'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap'
import { router } from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencil, faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk  } from '@fortawesome/free-regular-svg-icons'

library.add(faPencil, faFloppyDisk, faTrashCan, faCheck)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
