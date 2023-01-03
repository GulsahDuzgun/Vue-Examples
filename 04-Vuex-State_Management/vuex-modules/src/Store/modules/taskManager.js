export default{
    namespaced:true,
    state:{
        itemList : [],
        userList : []
    },
    actions:{
        setProperty(context, item){
            context.state.itemList.push(item);
        }
    },
    getters:{
        item : state => state.itemList[0]="Eminem",
    }
};
