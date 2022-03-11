import { createApp } from 'vue'
import 'bootstrap'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueAxios, Axios)
app.use(router)
app.mount('#app')
