import {createRouter, createWebHashHistory} from "vue-router"
import About from '@/Pages/AboutPage'
const router = createRouter({
    routes:[
        {
            name:"Home",
            path : "/",
            component : () => import("@/Pages/HomePage.vue")
        },
        {
            name:"About",
            path : "/About",
            component : About
        },
        {
            name : "Detail",
            path : "/details/:itemId",
            component : () => import("@/Pages/Details.vue")
        }
    ],
    history : createWebHashHistory()
})

export default router;