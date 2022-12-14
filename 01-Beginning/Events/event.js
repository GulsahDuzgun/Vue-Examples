const app=Vue.createApp({
    data(){
        return{
            inputText:"Lütfen metin giriniz",
        };
    },
    methods:{
        updateTitle(event){
            this.inputText = event.target.value
            console.log(event.target.value)
        }
    }
}).mount("#app")