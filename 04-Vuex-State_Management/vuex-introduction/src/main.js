import { createApp } from 'vue'
import App from './App.vue'
import data from './store.js'

const app = createApp(App)
app.use(data)
app.mount('#app')
