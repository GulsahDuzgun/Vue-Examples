export default{
    namespaced:true,
    state:{
        contactName : "puresol",
        contactAdress : "Kanada"
    },
    mutations:{
        setProperty(state, item){
            state.contactName = item
        }
    },
    getters:{
        item : state => state.contactAdress = "Finlandiya", 
    }
};