import { createRouter, createWebHashHistory } from "vue-router"; 

    const routes=[
        {
            name : "Home",
            path : "/",
            component : () =>import("@/Pages/HomePage.vue")
        },
        {
            name : "NewBookMark",
            path : "/AddNew",
            component : ()=>import("@/Pages/NewBookMark.vue")
        }
    ]


const router=createRouter({
    routes,
    history : createWebHashHistory()

});

export default router;