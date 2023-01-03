import {createStore} from 'vuex'

const dataVer = createStore({
    state:{
        person:{
            name:"Gülşah",
            lname:"Düzgün",
            age:23
        },
        theme:"dark",
        permissions:[1,2,3,4,5,6,7,8,9],
        employeeList:["Esra","Ahmet","Tuğçe","Gülşah","Aden","Deniz"],
        furniture:[
            {id:1,name:"Masa",content:"wood"},
            {id:2,name:"Kalem",content:"wood"},
            {id:3,name:"Vazo",content:"glas"},
            {id:4,name:"Kapı",content:"wood"},            
        ],
        activeUser:{
            name:"Gülşah Düzgün",
            password:232323,
            tc:1221212
        }

    },
    getters:{
        woodItem(state){
            console.log("geldi")
            console.log(state.furniture)
            return state.furniture.filter(i=> i.content === "wood")
            },
        setActiveUser(state){
            const user = {
                ...state.activeUser
            }
            delete user.password
            return user;
        }
    },
    mutations:{
        addItem(state, item){
            this.getters.woodItem
            state.furniture.push(item);
        }
    },
    actions:{
        addItemAsync(context, item){
            context.commit("addItem",item)
            
        }
    }

})

export default dataVer;