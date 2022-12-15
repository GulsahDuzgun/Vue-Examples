import { createApp } from 'vue'
import App from './App.vue'
import hello from './components/HelloWorld.vue'

const app = createApp(App)
app.component('HelloComponent', hello)
app.mount("#app")