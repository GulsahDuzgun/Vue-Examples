import { createStore } from "vuex";
import contact from './modules/contact'
import taskManager  from "./modules/taskManager";

const store = createStore({
    state : {
        name:"Mouse Potato"
    },
    modules:{
        taskManager:taskManager,
        iletisim:contact
    },
    getters:{
        item(state){
            state.name = "Mockingbird"
            console.log("index'e geldi")
            return "index.js";
        }
    }
})
export default store;