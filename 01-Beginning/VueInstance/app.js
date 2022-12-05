const app = Vue.createApp({
    data(){
        return{
            title:"Başlık Bilgisi"
        };
    },
    methods:{
        changeTitle(params){
            this.title = params
        }
    }
}).mount("#app");