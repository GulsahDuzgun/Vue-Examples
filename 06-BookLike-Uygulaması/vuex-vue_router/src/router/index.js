import {createRouter, createWebHashHistory} from "vue-router"
import store from "../store"
const routes = [
    {
        name : "Home",
        path : "/",
        component : () => import("@/views/Home")
    },
    {
        name : "LoginPage",
        path : "/login",
        component : () => import("@/views/Login")
    },
    {
        name : "RegisterPage",
        path : "/register",
        component : () => import("@/views/Register")
    },
    {
        name : "NewBookmarkPage",
        path : "/new",
        component : () => import ("@/views/NewBookmark")
    }
];

 const routerPage = createRouter({
    routes ,
    history : createWebHashHistory()
});

routerPage.beforeEach((to,from,next)=> {
    const authRequiredRoutes = ["Home"]
    const _isAuthenticated = store.getters._isAuthenticated
    const authNotRequiredRoutes = ["LoginPage", "RegisterPage"]
    
    if(authNotRequiredRoutes.indexOf(to.name)> -1 && _isAuthenticated) next(false)

    if(authRequiredRoutes.indexOf(to.name) > -1 ){
        if(_isAuthenticated){
        next()}
        else{
            next({name : "LoginPage"})
        }
    }else{
        next()
    }
    // console.log("to",to)
    // console.log("from",from)

})

export default routerPage;