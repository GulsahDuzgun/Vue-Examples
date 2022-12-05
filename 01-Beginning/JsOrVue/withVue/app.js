const app= Vue.createApp({
    data(){
        return{
            item :null,
            ItemList: []
        };
    },
    methods:{
        addItem(){
            this.ItemList.push(this.item);
        }
    }

}).mount("#application")