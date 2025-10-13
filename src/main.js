import { createApp } from 'vue'
import './assets/style/style.css'
import 'mingcute_icon/font/Mingcute.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')