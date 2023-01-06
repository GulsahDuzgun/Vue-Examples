import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style.css"
import appHeader from "@/components/Shared/appHeader"
import BookMarkItemList from "@/components/Shared/appBookmarkList"
import {appAxios} from "@/utils/appAxios"
import store from './store'

const app = createApp(App)

app.component("AppHeader",appHeader)
app.component("BookMarkList",BookMarkItemList)
//Bu iki component bizim application seviyesinde componetlerimizdir
//Neredeyse her sayfada var olduğu için tüm componentlara ayrı ayrı import ekmek yerine global olarak impor edilerek istenilen yerde çağrılarak kullanılabilir
app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios// Custom axios instance oluşturulur

app.mount('#app')
