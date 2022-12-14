const app = Vue.createApp({
    data(){
        return{
            itemList:["çilek", "armut","üzüm","elma","kayısı","mandalina"],
            search:"",
            searchList:[]
        };
    },
    methods:{},
    computed:{
      updateList(){
        let list = this.itemList.filter(i => i.includes(this.search))
        return console.log(list);
      }
    },
    watch:{
      search(){
        this.updateList
        this.searchList=this.itemList.filter(i=>i.includes(this.search))
    }}
}).mount("#app")