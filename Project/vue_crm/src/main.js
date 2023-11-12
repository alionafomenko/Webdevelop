import './assets/main.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'


/*import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
